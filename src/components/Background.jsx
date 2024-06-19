import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
  }
`;

export const Background = () => {
  const material = useRef();
  const colors = useRef({
    color1: new THREE.Color("#FFFFFF"), // Black
    color2: new THREE.Color("#000000"), // White
  });
  const data = useScroll();
  const tl = useRef();

  useFrame(() => {
    if (tl.current) {
      tl.current.progress(data.scroll.current);
      if (material.current) {
        material.current.uniforms.color1.value = colors.current.color1;
        material.current.uniforms.color2.value = colors.current.color2;
      }
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(colors.current.color1, { r: 0.43, g: 0.71, b: 0.92 }); // #4158D0
    tl.current.to(colors.current.color1, { r: 0.95, g: 0.3, b: 0.3 }); // #C850C0
    tl.current.to(colors.current.color2, { r: 0.7, g: 0.97, b: 0 }); // #FFCC70
  }, []);

  return (
    <group>
      <Sphere scale={[50, 50, 50]}>
        <shaderMaterial
          ref={material}
          uniforms={{
            color1: { value: colors.current.color1 },
            color2: { value: colors.current.color2 },
          }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
