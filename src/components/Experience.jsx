import { Float, MeshDistortMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { framerMotionConfig } from "../Config";
import * as THREE from "three";
import { Projects } from "./Projects";
import { Background } from "./Background";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  let [screenSize, setScreenSize] = useState(
    window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg"
  );
  const updateScreenSize = () => {
    if (window.innerWidth < 768) {
      setScreenSize("sm");
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setScreenSize("md");
    } else {
      setScreenSize("lg");
    }
  };

  useEffect(() => {
    const handleResize = () => updateScreenSize();
    window.addEventListener("resize", handleResize);
    // Initial check
    updateScreenSize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [section, setSection] = useState();
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();
  const data = useScroll();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const createGradientTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");

    const gradient = context.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "gold");
    gradient.addColorStop(1, "orange");
    gradient.addColorStop(0.5, "red");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  };

  const gradientTexture = createGradientTexture();

  return (
    <>
      <Background />
      <motion.group
        position={[
          screenSize == "md" || screenSize == "sm"
            ? -0.782765212962284
            : 4.782765212962284,
          -0.9199999999999999,
          0.6727047723373256,
        ]}
        rotation={[-3.141592653589793, 1.3359933214452662, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 3.5,
            scaleY: 3.5,
            scaleZ: 3.5,
          },
          1: {
            y: -viewport.height + -1,
            x: screenSize == "md" || screenSize == "sm" ? 0 : 0.5,
            z: 6,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 3,
            scaleY: 3,
            scaleZ: 3,
          },
          2: {
            x: screenSize == "md" || screenSize == "sm" ? -1.8 : -6,
            y:
              screenSize == "md" || screenSize == "sm"
                ? -viewport.height * 2 + -1.5
                : -viewport.height * 2 + -3,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: screenSize == "md" || screenSize == "sm" ? 2 : 3,
            scaleY: screenSize == "md" || screenSize == "sm" ? 2 : 3,
            scaleZ: screenSize == "md" || screenSize == "sm" ? 2 : 3,
          },
          3: {
            y: -viewport.height * 3 + -3.5,
            x: 0.8,
            z: 7.5,
            rotateX: 0,
            rotateY: -Math.PI / 10,
            rotateZ: 0,
            scaleX: 4,
            scaleY: 4,
            scaleZ: 4,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          screenSize == "md" || screenSize == "sm" ? -1.5 : 4,
          -2.5,
          2,
        ]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 1.1}
        animate={{
          y: section === 0 ? -2 : -3,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[-1.25, 1.2, 1.17]}
          scale={4}
          rotation={[-Math.PI, -1.52, -Math.PI]}
        ></group>
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh scale={[3.5, 5, 5]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              map={gradientTexture}
            />
          </mesh>
        </Float>
        <Float>
          <mesh
            scale={[3.5, 5, 5]}
            position={
              screenSize == "md" || screenSize == "sm"
                ? [1, 1, -18]
                : [2.5, 1, -18]
            }
          >
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              map={gradientTexture}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};
