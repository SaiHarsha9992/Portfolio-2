import { useEffect, useState } from "react";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
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
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        style={{
          zIndex: 20,
          position: "fixed",
          top: "3rem", // top-12
          right: screenSize == "md" || screenSize == "sm" ? "1.5rem" : "3rem", // right-12
          padding: "0.75rem", // p-3
          backgroundColor: "gold", // bg-indigo-600
          width: "2.75rem", // w-11
          height: "2.75rem", // h-11
          borderRadius: "0.375rem", // rounded-md
        }}
      >
        <div
          style={{
            backgroundColor: "black", // bg-white
            height: "0.125rem", // h-0.5
            borderRadius: "0.375rem", // rounded-md
            width: "100%", // w-full
            transition: "all 0.3s ease", // transition-all
            transform: menuOpened
              ? "rotate(45deg) translateY(0.125rem)"
              : "none",
          }}
        />
        <div
          style={{
            backgroundColor: "#FFFFFF", // bg-white
            height: "0.125rem", // h-0.5
            borderRadius: "0.375rem", // rounded-md
            width: "100%", // w-full
            margin: "0.25rem 0", // my-1
            display: menuOpened ? "none" : "block",
          }}
        />
        <div
          style={{
            backgroundColor: "black", // bg-white
            height: "0.125rem", // h-0.5
            borderRadius: "0.375rem", // rounded-md
            width: "100%", // w-full
            transition: "all 0.3s ease", // transition-all
            transform: menuOpened ? "rotate(-45deg)" : "none",
          }}
        />
      </button>
      <div
        style={{
          zIndex: 10,
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black", // bg-white
          transition: "width 0.3s ease", // transition-all
          overflow: "hidden", // overflow-hidden
          display: "flex",
          flexDirection: "column",
          width: menuOpened
            ? screenSize === "sm" || screenSize === "md"
              ? "100%"
              : "20rem"
            : "0",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2.5rem", // gap-6
            padding: "5rem", // p-8
          }}
        >
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};
const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "1.5rem", // text-2xl (equivalent to 24px or 1.5rem)
        fontWeight: "bold", // font-bold
        cursor: "pointer", // cursor-pointer
        transition: "color 0.3s ease", // transition-colors
        borderRadius: "10%",
      }}
      onMouseEnter={(e) => (e.target.style.color = "gold")} // hover:text-indigo-600
      onMouseLeave={(e) => (e.target.style.color = "inherit")} // reset color on mouse leave
    >
      {label}
    </button>
  );
};
