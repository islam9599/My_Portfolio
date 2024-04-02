import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const MacshopDescription = (props: any) => {
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
          <motion.h1 style={{ y: yBg }}>Used Technologies</motion.h1>
          <a href="http://abu-macshop.uz/">http://abu-macshop.uz/</a>
          <span>
            <strong>Frontend </strong>HTML, CSS, REACTJS, TYPESCRIPT, MUI,
            REACT-ROUTER- DOM, REDUX, SWIPER, SWEETALERT2, AXIOS, SOCKET.IO-
            CLIENT.
          </span>
          <span>
            <strong>Backend</strong> MONGODB, MONGOOSE, NODEJS, REST API,
            JSONWEBTOKEN, MULTER, ASSERT, COOKIE-PARSER, DOTENV.
          </span>
          <span>
            <strong>Deployment</strong> BUILT A VISUALLY APPEALING, SECURE, AND
            SCALABLE INFRASTRUCTURE USING LINUX, DOCKER, NGINX, FIREWALL, DNS
            CONFIG, PM2 PLUS, GRAFANA, VPC, && VPS ENGINEERING. ENSURING OPTIMAL
            PERFORMANCE, ROBUST SECURITY,ANDSEAMLESS SCALABILITY.
          </span>
          <h2>
            <strong>Frontend: </strong>HTML, CSS, REACTJS, TYPESCRIPT, MUI,
            REACT-ROUTER- DOM, REDUX, SWIPER, SWEETALERT2, AXIOS, SOCKET.IO-
            CLIENT. <br /> <strong>Backend:</strong> MONGODB, MONGOOSE, NODEJS,
            REST API, JSONWEBTOKEN, MULTER, ASSERT, COOKIE-PARSER, DOTENV.
          </h2>
          <motion.img
            src="/macshop/details_1.png"
            alt=""
            style={{ marginTop: "85px" }}
          />
        </div>
        <div className="img_wrapper">
          <motion.img src="/macshop/details_2.png" alt="" />
          <motion.img src="/macshop/details_3.png" alt="" />
        </div>
      </div>
    </div>
  );
};
