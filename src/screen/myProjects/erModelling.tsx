import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const ErModelling = (props: any) => {
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
          <motion.h1 style={{ y: yBg }}>Abu Macshop ER Modelling</motion.h1>
          <a href="http://abu-macshop.uz/">http://abu-macshop.uz/</a>
          <span>
            Entity-relationship (ER) modeling is a method used to visualize and
            describe the relationships between different entities in a system or
            database. It's commonly used in database design to create a
            conceptual schema that represents the structure of the data and the
            relationships between entities.
          </span>
          <h2>
            Entity-relationship (ER) modeling is a method used to visualize and
            describe the relationships between different entities in a system or
            database. It's commonly used in database design to create a
            conceptual schema that represents the structure of the data and the
            relationships between entities.
          </h2>
          <motion.img
            src="/macshop/details_4.png"
            alt=""
            style={{ marginTop: "85px" }}
          />
        </div>
        <div className="img_wrapper">
          <motion.img src="/macshop/er_model.jpg" alt="" />
          <motion.img src="/macshop/details_5.png" alt="" />
        </div>
      </div>
    </div>
  );
};
