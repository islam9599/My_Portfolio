import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const OtherProjects = (props: any) => {
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
          <motion.h1 style={{ y: yBg }}>Enginx</motion.h1>

          <span>
            <strong>Description:</strong> Enginx is a sophisticated online
            learning platform offering a wide array of paid courses, including
            those covering MERN stack and Artificial Intelligence. With Enginx,
            students can create accounts, purchase courses, and attend sessions,
            while administrators maintain control over tutorial access.
            Instructors have the ability to upload approved courses for users to
            access.
            <br />
            <br />
            <strong>My contribution:</strong> I focused on crafting an engaging
            frontend interface. Leveraging an assortment of cutting-edge
            technologies such as JavaScript, JQuery, EJS, HTML, CSS, Axios,
            Bootstrap, SweetAlert2, Swiper, and PixelJS, I aimed to deliver a
            visually striking and seamlessly interactive user experience.
          </span>

          <motion.img
            src="/macshop/enginex_3.png"
            alt=""
            style={{ marginTop: "85px" }}
          />
        </div>
        <div className="img_wrapper">
          <motion.img src="/macshop/enginex_1.png" alt="" />
          <motion.img src="/macshop/enginex_2.png" alt="" />
        </div>
      </div>
    </div>
  );
};
