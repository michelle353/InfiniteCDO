"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// --- FRAGMENT SHADER ---
//
// Original shader produced dark smoke on a gray floor (clamp .08) with a
// 10-second dark fade-in (mix(vec3(.08), col, min(time*.1, 1))).
// We've rewritten the core compositing so the base is pure white and noise
// density blends toward `u_color`, giving white → purple wisps with no gray
// and no startup fade.
const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  uv.x+=.25;
  uv*=vec2(2,1);

  // Same fbm flow as before — preserves the original animated smoke motion.
  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  // Three slightly-offset samples → subtle chromatic shimmer in the wisps.
  float n1=fbm(uv+vec2(0,T*.015)+n);
  float n2=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  float n3=fbm(uv*1.006+vec2(0,T*.015)+n+.006);
  float density=(n1+n2+n3)/3.;

  // ─ White-dominant tuning ───────────────────────────────────────
  // pow() pushes most of the canvas toward 0 (pure white) so only
  // the densest noise peaks register as purple — wisps read as
  // accents, not the dominant tone. The 0.55 cap means even the
  // strongest wisp blends 45% white in, keeping the look airy.
  density=clamp(density,0.,1.);
  density=pow(density, 2.2) * 0.55;

  // White base → soft blend toward u_color where smoke is dense.
  vec3 col=mix(vec3(1.0), u_color, density);

  O=vec4(col,1);
}`;

const vertexShaderSource = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

// --- RENDERER CLASS ---
class Renderer {
  private vertexSrc = vertexShaderSource;
  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  private gl: WebGL2RenderingContext;
  private canvas: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private color: [number, number, number] = [0.5, 0.5, 0.5];

  constructor(canvas: HTMLCanvasElement, fragmentSource: string) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
    this.setup(fragmentSource);
    this.init();
  }

  updateColor(newColor: [number, number, number]) {
    this.color = newColor;
  }

  updateScale() {
    // Cap DPR at 1.5 to protect mid-range mobile GPUs.
    const dpr = Math.min(1.5, Math.max(1, window.devicePixelRatio));
    const { innerWidth: width, innerHeight: height } = window;
    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private compile(shader: WebGLShader, source: string) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(`Shader compilation error: ${gl.getShaderInfoLog(shader)}`);
    }
  }

  reset() {
    const { gl, program, vs, fs } = this;
    if (!program) return;
    if (vs) {
      gl.detachShader(program, vs);
      gl.deleteShader(vs);
    }
    if (fs) {
      gl.detachShader(program, fs);
      gl.deleteShader(fs);
    }
    gl.deleteProgram(program);
    this.program = null;
  }

  private setup(fragmentSource: string) {
    const gl = this.gl;
    this.vs = gl.createShader(gl.VERTEX_SHADER);
    this.fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!this.vs || !this.fs || !program) return;
    this.compile(this.vs, this.vertexSrc);
    this.compile(this.fs, fragmentSource);
    this.program = program;
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(`Program linking error: ${gl.getProgramInfoLog(this.program)}`);
    }
  }

  private init() {
    const { gl, program } = this;
    if (!program) return;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    Object.assign(program, {
      resolution: gl.getUniformLocation(program, "resolution"),
      time: gl.getUniformLocation(program, "time"),
      u_color: gl.getUniformLocation(program, "u_color"),
    });
  }

  render(now = 0) {
    const { gl, program, buffer, canvas } = this;
    if (!program || !gl.isProgram(program)) return;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = program as any;
    gl.uniform2f(p.resolution, canvas.width, canvas.height);
    gl.uniform1f(p.time, now * 1e-3);
    gl.uniform3fv(p.u_color, this.color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

// --- UTILITY ---
const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : null;
};

// --- REACT COMPONENT ---
interface SmokeBackgroundProps {
  /** Tint applied to the brightest parts of the smoke (hex like "#5B3FD6") */
  smokeColor?: string;
  /** Optional className applied to the canvas */
  className?: string;
}

export const SmokeBackground: React.FC<SmokeBackgroundProps> = ({
  smokeColor = "#5B3FD6", // default to brand deepPurple
  className,
}) => {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  // Init + animation loop (skipped under prefers-reduced-motion)
  useEffect(() => {
    if (reduceMotion) return;
    if (!canvasRef.current) return;

    // Bail gracefully on browsers without WebGL2 (older Safari, etc.)
    const probeCtx = canvasRef.current.getContext("webgl2");
    if (!probeCtx) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer(canvas, fragmentShaderSource);
    rendererRef.current = renderer;

    const handleResize = () => renderer.updateScale();
    handleResize();
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const loop = (now: number) => {
      renderer.render(now);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.reset();
    };
  }, [reduceMotion]);

  // Push color updates without re-initializing the renderer
  useEffect(() => {
    const renderer = rendererRef.current;
    if (!renderer) return;
    const rgb = hexToRgb(smokeColor);
    if (rgb) renderer.updateColor(rgb);
  }, [smokeColor]);

  // Reduced-motion fallback: static brand gradient (no canvas, no GPU work)
  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className={`w-full h-full block bg-gradient-to-br from-brand-lavenderLight via-white to-brand-lavenderLight ${
          className ?? ""
        }`}
      />
    );
  }

  return <canvas ref={canvasRef} aria-hidden="true" className={`w-full h-full block ${className ?? ""}`} />;
};

export default SmokeBackground;
