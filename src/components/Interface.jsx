import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useEffect, useState } from "react";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const Section = (props) => {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg"
  );
  const { children, mobileTop } = props;

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
    <motion.section
      style={{
        height: "75vh",
        width: mobileTop ? "80vw" : "100vw",
        padding: "8rem",
        maxWidth: "1536px",
        margin: "0 auto",
        marginLeft:
          screenSize === "md" || screenSize === "sm" ? "-90px" : "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: screenSize === "md" || screenSize === "sm" ? "start" : "center",
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const [screenSize, setScreenSize] = useState(
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
    <Section mobileTop>
      <h1
        style={{
          fontSize: screenSize === "md" || screenSize === "sm" ? "1.5rem" : "2rem",
          fontWeight: "1000",
          lineHeight: "1.75",
          padding: 0,
          margin: 0,
          color: "white",
        }}
      >
        Hi, I'm
        <br />
        <span
          style={{
            paddingLeft: "0.1rem",
            paddingRight: "0.3rem",
            fontStyle: "italic",
          }}
        >
          Gadu Kedarinadh Sai Harsha
        </span>
      </h1>
      <motion.p
        style={{
          fontSize: "1.525rem",
          color: "black",
        }}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        A Passionate FullStack Developer
        <br />
        from India
        <br />
        <br />
        if any help
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          fontSize: "1.25rem",
          marginTop: screenSize === "md" || screenSize === "sm" ? "0.8rem" : "1rem",
        }}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const skills = [
  { title: "Threejs / React Three Fiber", level: 60 },
  { title: "React", level: 70 },
  { title: "Nextjs", level: 60 },
  { title: "Nodejs", level: 70 },
  { title: "Javascript", level: 80 },
  { title: "3D Modeling", level: 40 },
  { title: "Python", level: 80 },
];

const languages = [
  { title: "Telugu", level: 100 },
  { title: "English", level: 90 },
  { title: "Hindi", level: 40 },
];

const SkillsSection = () => {
  const [screenSize, setScreenSize] = useState(
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
    <Section>
      <motion.div
        whileInView={"visible"}
        style={{
          marginBottom: screenSize === "sm" || screenSize === "md" ? "90px" : "190px",
          width: screenSize === "sm" || screenSize === "md" ? "80%" : "30%",
        }}
      >
        <h2
          style={{
            fontSize: screenSize === "md" || screenSize === "sm" ? "1rem" : "2rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Skills
        </h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} style={{ width: "100%" }}>
              <motion.h3
                style={{
                  fontSize: screenSize === "md" || screenSize === "sm" ? "0.8rem" : "1rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div
                style={{
                  height: "0.5rem",
                  width: screenSize === "md" || screenSize === "sm" ? "100%" : "60%",
                  backgroundColor: "white",
                  borderRadius: "9999px",
                  marginTop: "0.5rem",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    backgroundColor: "black",
                    borderRadius: "9999px",
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        whileInView={"visible"}
        style={{
          width: screenSize === "sm" || screenSize === "md" ? "80%" : "30%",
        }}
      >
        <h2
          style={{
            fontSize: screenSize === "md" || screenSize === "sm" ? "1rem" : "2rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Languages
        </h2>
        <div className="mt-8 space-y-4">
          {languages.map((language, index) => (
            <div key={index} style={{ width: "100%" }}>
              <motion.h3
                style={{
                  fontSize: screenSize === "md" || screenSize === "sm" ? "0.8rem" : "1rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                }}
              >
                {language.title}
              </motion.h3>
              <div
                style={{
                  height: "0.5rem",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "9999px",
                  marginTop: "0.5rem",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    width: `${language.level}%`,
                    backgroundColor: "black",
                    borderRadius: "9999px",
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};


const ContactSection = () => {
  const [state, handleSubmit] = useForm("your-form-id");

  if (state.succeeded) {
    return <p style={{ color: 'white', fontSize: '1.2rem' }}>Thanks for your submission!</p>;
  }

  return (
    <Section>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Contact
      </h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <label htmlFor="name" style={{ marginBottom: "1rem", color: "white" }}>
          Name
          <input
            id="name"
            type="text"
            name="name"
            required
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label htmlFor="email" style={{ marginBottom: "1rem", color: "white" }}>
          Email
          <input
            id="email"
            type="email"
            name="email"
            required
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label htmlFor="message" style={{ marginBottom: "1rem", color: "white" }}>
          Message
          <textarea
            id="message"
            name="message"
            required
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
          />
        </label>

        <button
          type="submit"
          disabled={state.submitting}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "black",
            color: "white",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#333"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "black"}
        >
          Send
        </button>
      </form>
    </Section>
  );
};



const ProjectsSection = () => {
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
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  return (
    <Section>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          marginTop:
            screenSize == "md" || screenSize == "sm" ? "200px" : "200px",
          marginLeft:
            screenSize == "md" || screenSize == "sm" ? "-20px" : "240px",
          gap: "2rem", // Equivalent to gap-8
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <button
          style={{
            transition: "color 0.3s ease", // Equivalent to transition-colors
            width: screenSize == "md" || screenSize == "sm" ? "60px" : "70px",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#4F46E5")} // hover:text-indigo-600
          onMouseLeave={(e) => (e.target.style.color = "inherit")} // Reset color on mouse leave
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2
          style={{
            fontSize:
              screenSize == "md" || screenSize == "sm" ? "3rem" : "4rem", // text-5xl
            fontWeight: "bold", // font-bold
          }}
        >
          Projects
        </h2>
        <button
          style={{
            transition: "color 0.3s ease", // Equivalent to transition-colors
            width: screenSize == "md" || screenSize == "sm" ? "60px" : "70px",
          }}
          onMouseEnter={(e) => (e.target.style.color = "black")} // hover:text-indigo-600
          onMouseLeave={(e) => (e.target.style.color = "inherit")} // Reset color on mouse leave
          onClick={nextProject}
        >
          →
          <br />
          Next
        </button>
      </div>
    </Section>
  );
};
