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
  console.log(screenSize);
  return (
    <motion.section
      style={{
        height: "75vh",
        width: mobileTop ? "80vw" : "100vw",
        padding: "6rem",
        paddingRight: "1.5rem",
        maxWidth: "1536px", // max-w-screen-2xl
        margin: "0 auto",
        marginLeft:
          screenSize == "md" || screenSize == "sm" ? "-90px" : "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent:
          screenSize == "md" || screenSize == "sm" ? "start" : "center",
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
      <SkillsSection setSection={setSection} />
      <ProjectsSection setSection={setSection} />
      <ContactSection setSection={setSection} />
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
          color: "gold",
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
  {
    title: "Threejs / React Three Fiber",
    level: 60,
  },
  {
    title: "React",
    level: 70,
  },
  {
    title: "Nextjs",
    level: 60,
  },
  {
    title: "Nodejs",
    level: 70,
  },
  {
    title: "Javascript",
    level: 80,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
  {
    title: "Python",
    level: 80,
  },
];

const languages = [
  {
    title: "Telugu",
    level: 100,
  },
  {
    title: "English",
    level: 90,
  },
  {
    title: "Hindi",
    level: 40,
  },
];
const SkillsSection = () => {
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
    <Section>
      <motion.div
        whileInView={"visible"}
        style={{
          marginBottom: screenSize === "sm" || screenSize === "md" ? "90px":"190px",
          width: screenSize === "sm" || screenSize === "md" ? "80%" : "30%",
        }}
      >
        <h2
          style={{
            fontSize:
              screenSize == "md" || screenSize == "sm" ? "1rem" : "2rem",
            fontWeight: "bold",
            color: "white",
          }}
          className="text-5xl font-bold"
        >
          Skills
        </h2>
        <div className="mt-8 space-y-4" style={{ marginTop: "10px" }}>
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                style={{
                  fontSize:
                    screenSize == "md" || screenSize == "sm"
                      ? "0.8rem"
                      : "1rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div
                style={{
                  height: "0.5rem",
                  width: screenSize == "md" || screenSize == "sm" ? "100%" : "60%",
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
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>

         <motion.div
          whileInView={"visible"}
          style={{
            width: screenSize === "sm" || screenSize === "md" ? "80%" : "30%",
          }}
        >
          <h2
          style={{
            fontSize:
              screenSize == "md" || screenSize == "sm" ? "1rem" : "2rem",
            fontWeight: "bold",
            color: "white",
          }}
          className="text-5xl font-bold"
        >
            Languages
          </h2>
          <div className="mt-8 space-y-4" style={{ marginTop: "10px" }}>
            {languages.map((lng, index) => (
              <div
                key={index}
                style={{
                  width:
                    screenSize === "sm" || screenSize === "md" ? "122%" : "320%",
                }}
              >
                <motion.h3
                style={{
                  fontSize:
                    screenSize == "md" || screenSize == "sm"
                      ? "0.8rem"
                      : "1rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                  {lng.title}
                </motion.h3>
                <div
                style={{
                  height: "0.5rem",
                  width: screenSize == "md" || screenSize == "sm" ? "100%" : "60%",
                  backgroundColor: "white",
                  borderRadius: "9999px",
                  marginTop: "0.5rem",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    width: `${lng.level}%`,
                    backgroundColor: "black",
                    borderRadius: "9999px",
                  }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xwkgggvw");
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
    updateScreenSize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section>
      <div
        style={{
          paddingRight:
            screenSize === "md" || screenSize === "sm" ? "50px" : "0px",
        }}
      >
        <h2
          style={{
            fontSize:
              screenSize == "md" || screenSize == "sm" ? "1.5rem" : "2.5rem",
            fontWeight: "bold",
          }}
        >
          Contact me
        </h2>
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            borderRadius: "0.375rem",
            backgroundColor: "grey",
            width: screenSize == "md" || screenSize == "sm" ? "11rem" : "24rem",
            maxWidth: "100%",
            opacity: 0.9,
          }}
        >
          {state.succeeded ? (
            <p style={{ color: "gold", textAlign: "center" }}>
              Thanks for your message !
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "medium",
                  color: "#000000",
                  marginTop: "0.15rem",
                  marginBottom: "0.15rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                style={{
                  width: "90%",
                  borderRadius: "0.375rem",
                  borderWidth: "0",
                  color: "#000000",
                  boxShadow:
                    "0 0.125rem 0.25rem rgba(0,0,0,0.05),inset 0 0.0625rem 0.125rem rgba(0,0,0,0.05)",
                  placeholderColor: "rgba(0,0,0,0.4)",
                  padding: "0.65rem",
                }}
              />
              <label
                htmlFor="email"
                style={{
                  fontWeight: "medium",
                  color: "#000000",
                  marginTop: "1rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                style={{
                  width: "90%",
                  borderRadius: "0.375rem",
                  borderWidth: "0",
                  color: "#000000",
                  boxShadow:
                    "0 0.125rem 0.25rem rgba(0,0,0,0.05),inset 0 0.0625rem 0.125rem rgba(0,0,0,0.05)",
                  placeholderColor: "rgba(0,0,0,0.4)",
                  padding: "0.65rem",
                }}
              />
              <ValidationError
                style={{
                  margin: 1,
                  color: "red",
                }}
                errors={state.errors}
              />
              <label
                htmlFor="message"
                style={{
                  fontWeight: "medium",
                  color: "#000000",
                  marginTop: "1rem",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                style={{
                  height: "8rem",
                  width: "90%",
                  borderRadius: "0.375rem",
                  borderWidth: "0",
                  color: "#000000",
                  boxShadow:
                    "0 0.125rem 0.25rem rgba(0,0,0,0.05),inset 0 0.0625rem 0.125rem rgba(0,0,0,0.05)",
                  placeholderColor: "rgba(0,0,0,0.4)",
                  padding: "0.75rem",
                }}
              />
              <ValidationError
                style={{
                  margin: 1,
                  color: "red",
                }}
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                style={{
                  backgroundColor: "black",
                  color: "#FFFFFF",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  marginTop: "2rem",
                }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
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
            screenSize == "md" || screenSize == "sm" ? "-15px" : "240px",
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
              screenSize == "md" || screenSize == "sm" ? "2rem" : "3rem", // text-5xl
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
