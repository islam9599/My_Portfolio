import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/skills.scss";

export const Skills = (props: any) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    /* @ts-ignore */
    target: ref,
    offset: ["start start", "end start"],
  });
  const { type } = props;

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      /* @ts-ignore */
      ref={ref}
      className="skills_container"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d )"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      {
        <motion.h1 style={{ y: yBg }}>
          {type === "skills" ? "What skills do I have?" : "My Projects"}
        </motion.h1>
      }
      <motion.div
        className="mountains"
        style={{ backgroundImage: "url(/mountains.png)" }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: `url(${
            type === "skills" ? "images/planets.png" : "images/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{ backgroundImage: "url(images/stars.png)" }}
      ></motion.div>
    </div>
  );
};
