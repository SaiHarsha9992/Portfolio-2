import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

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
  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  const containerStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 50,
    transition: "opacity 1s",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181716",
    backgroundImage:
      "linear-gradient(62deg, #181716 0%, #525247 50%, #312a2a 100%)", // Tailwind 'bg-indigo-50'
    opacity: started ? 0 : 1,
  };

  const textStyles = {
    fontSize: screenSize == "md" || screenSize == "sm" ? "2rem" : "4rem", // Tailwind 'text-4xl'
    fontWeight: "bold",
    color: "gold", // Tailwind 'text-indigo-900'
    position: "relative",
  };

  const overlayTextStyles = {
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
    textOverflow: "clip",
    transition: "width 0.5s",
    width: `${progress}%`,
  };

  const fadedTextStyles = {
    opacity: 0.4,
  };

  return (
    <div style={containerStyles}>
      <div style={textStyles}>
        <div style={overlayTextStyles}>Ꮆ.Ҝ.丂.卄卂尺丂卄卂</div>
        <div style={fadedTextStyles}>Ꮆ.Ҝ.丂.卄卂尺丂卄卂</div>
      </div>
    </div>
  );
};
