import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.28;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef();
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener(
      "mouseover",
      function (e) {
        if (
          e.target.tagName.toLowerCase() === "button" ||
          // check parent is button
          e.target.parentElement.tagName.toLowerCase() === "button" ||
          // check is input or textarea
          e.target.tagName.toLowerCase() === "input" ||
          e.target.tagName.toLowerCase() === "textarea"
        ) {
          setHoverButton(true);
        } else {
          setHoverButton(false);
        }
      }
    );
    return () => {
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);
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

  return (
    <>
      {screenSize == "lg" && (
        <div
          style={{
            position: "fixed", // Fixed positioning relative to viewport
            left: 0, // Initially position at left edge of viewport
            top: 0, // Initially position at top edge of viewport
            transform: "translate(-50%, -50%)", // Center the cursor at the pointer
            borderRadius: "9999px", // Rounded shape
            pointerEvents: "none", // Prevent the cursor from intercepting mouse events
            width: hoverButton ? "1.25rem" : "0.75rem", // Adjust size based on hover state
            height: hoverButton ? "1.25rem" : "0.75rem",
            backgroundColor: hoverButton ? "transparent" : "black", // Adjust background color based on hover state
            border: hoverButton ? "2px solid white" : "none", // Adjust border based on hover state
            zIndex: 9999, // Ensure the cursor is above other elements
          }}
          ref={cursorOutline}
        ></div>
      )}
    </>
  );
};
