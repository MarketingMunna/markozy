"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const noise = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uHover;
varying vec3 vNormal;
varying vec3 vView;
varying float vNoise;
${noise}
void main(){
  float n = snoise(normal * 1.3 + vec3(uTime * 0.22));
  float n2 = snoise(normal * 3.0 - vec3(uTime * 0.15)) * 0.35;
  vNoise = n + n2;
  vec3 pos = position + normal * (n + n2) * (0.16 + uHover * 0.1);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = /* glsl */ `
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uRim;
varying vec3 vNormal;
varying vec3 vView;
varying float vNoise;
void main(){
  float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.4);
  vec3 base = mix(uA, uB, smoothstep(-0.6, 0.8, vNoise));
  float bands = smoothstep(0.3, 0.5, fract(vNoise * 2.0)) * smoothstep(0.7, 0.5, fract(vNoise * 2.0)) * 0.06;
  vec3 col = base * 0.6 + uRim * fres * 1.6 + bands;
  gl_FragColor = vec4(col, 1.0);
}`;

function Blob({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHover: { value: 0 },
      uA: { value: new THREE.Color("#2e1065") },
      uB: { value: new THREE.Color("#8b5cf6") },
      uRim: { value: new THREE.Color("#c4b5fd") },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = reduced ? 2 : state.clock.elapsedTime;
    uniforms.uTime.value = t;
    const { x, y } = state.pointer;
    const dist = Math.min(1, Math.hypot(x, y));
    uniforms.uHover.value = THREE.MathUtils.lerp(uniforms.uHover.value, 1 - dist, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.5 + t * 0.08, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.35, 0.05);
    if (wire.current) wire.current.rotation.y -= reduced ? 0 : delta * 0.12;
  });

  return (
    <group ref={group} scale={0.82}>
      <mesh>
        <icosahedronGeometry args={[1.55, 40]} />
        <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
      </mesh>
      <mesh ref={wire} scale={1.32}>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.08} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[2.45, 0.006, 8, 160]} />
        <meshBasicMaterial color="#c4b5fd" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.5, 0.3]}>
        <torusGeometry args={[2.8, 0.004, 8, 160]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi) - 2;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.1, 0.02);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#c4b5fd" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setSmall(window.innerWidth < 768);
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        frameloop={reduced ? "demand" : inView ? "always" : "never"}
        dpr={[1, small ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        aria-hidden="true"
        // Listen on the whole page so the sphere reacts even when the cursor is over hero text
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <Blob reduced={reduced} />
        <Particles count={small ? 350 : 800} reduced={reduced} />
      </Canvas>
    </div>
  );
}
