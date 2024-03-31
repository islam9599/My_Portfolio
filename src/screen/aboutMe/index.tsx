import React from "react";
import { motion } from "framer-motion";
import "../../scss/about-me.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-420%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const AboutMe = (props: any) => {
  return (
    <div className="about_me">
      <div className="wrapper">
        <motion.div
          className="text_container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Ergashev Islombek(David)
          </motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/images/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        /* @ts-ignore */
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Experienced MERN STACK Developer
      </motion.div>
      <div className="image_container">
        <img src="/images/david.webp" alt="" />
      </div>
    </div>
  );
};
