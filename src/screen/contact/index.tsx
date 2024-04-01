import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const Contact = (props: any) => {
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
      className="my_projects_container"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d )"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      <div className="my_projects_wrapper">
        <div className="text_wrapper" style={{ lineHeight: "40px" }}>
          <motion.h1 style={{ y: yBg }}>Contact me</motion.h1>

          <motion.img
            src="/macshop/contact.png"
            alt=""
            style={{ marginTop: "85px", zIndex: 4 }}
          />
        </div>
        <div className="img_wrapper">
          <motion.img
            src="/macshop/sticker.webp"
            alt=""
            style={{ marginTop: "85px", zIndex: 4 }}
          />
        </div>
      </div>
      <motion.div
        className="mountains"
        style={{ backgroundImage: "url(/mountains.png)" }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{ backgroundImage: "url(images/stars.png)" }}
      ></motion.div>
    </div>
  );
};
