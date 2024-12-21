import { useFrame, useThree } from "@react-three/fiber";

import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

export const projects = [
  {
    title: "LEO AI ASSISTANT",
    url: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_leoai-leoassistant-ai-activity-7170360145581993984-fkAi?utm_source=share&utm_medium=member_desktop",
    image: "/images/LeoAi Assistant.png",
    description:
      "LEO AI Assistant is an innovative project that I've developed",
  },
  {
    title: "3D Portfolio",
    url: "https://gksharshaportfolio.vercel.app/",
    image: "/images/Portfolio.png",
    description: "I Created 3D portfolio with 3d model of mine with interactive creation",
  },
  {
    title: "LEO AI ASSISTANT 2.0",
    url: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_wawasensai-blender-3dmodeling-activity-7205142075825147904-Klg8?utm_source=share&utm_medium=member_desktop",
    image: "/images/Leo Ai Assistant 2.0.png",
    description:
      "I Recreated Leo Ai Assistant with a 3d Model real time character",
  },
  {
    title: "VIKRAM AI ASSISTANT",
    url: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_vikramai-artificialintelligence-ai-ugcPost-7224084435606941696-JVnn?utm_source=share&utm_medium=member_desktop",
    image: "/images/Vikram Ai Assistant.png",
    description: "I updated the ai assistant with more security adding",
  },
  {
    title: "H-Commerce",
    url: "https://h-mart-ecommerce.vercel.app/",
    image: "/images/H-Commerce.png",
    description: "simple e-commerce web site",
  },
];
const Project = (props) => {
  const { project, highlighted } = props;
  const background = useRef();
  const bgOpacity = useMotionValue(0.4);
  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);
  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });
  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        position-x={-4}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial color="black" transparent opacity={0.8} />
      </mesh>
      <Image
        scale={[3, 2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.4}
        position-x={-4}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-5, -0.7, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.15}
        position={[-5, -1, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  return (
    <group position-y={-viewport.height * 2 + 1} position-x={4}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 6.5, 1, -3]}
          animate={{
            x: 0 + (index - currentProject) * 7.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
