import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const AdminPanel = (props: any) => {
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
          <motion.h1 style={{ y: yBg }}>Abu Macshop Admin Panel</motion.h1>
          <a href="http://abu-macshop.uz/">
            http://abu-macshop.uz:3005/abu_tech
          </a>
          <span>
            <strong>Description:</strong> Empowering sellers to show and sell
            their products effectively. Shops can add products along with their
            specifications and modify the status of their products. Meanwhile,
            administrators have authority over user statuses && oversight of
            main website events.
            <br />
            <br />
            <br />
            <strong>Frontend:</strong> HTML, Bootstrap, CSS, Axios, EJS,
            SweetAlert2, jQuery.
          </span>

          <span>
            <strong>Backend:</strong> HTML, Node.js, Express, MongoDB, Mongoose,
            express-session, bcryptjs JWT, Assert, cookie-parser, socket.io,
            Dotenv.
          </span>
          <h2>
            <strong>Description:</strong> Empowering sellers to show and sell
            their products effectively. <br /> <strong>Frontend:</strong> HTML,
            Bootstrap, CSS, Axios, EJS, SweetAlert2, jQuery. <br />{" "}
            <strong>Backend:</strong> HTML, Node.js, Express, MongoDB, Mongoose,
            express-session, bcryptjs JWT, Assert, cookie-parser, socket.io,
            Dotenv.
          </h2>

          <motion.img
            src="/macshop/admin_1.png"
            alt=""
            style={{ marginTop: "85px" }}
          />
        </div>
        <div className="img_wrapper">
          <motion.img src="/macshop/admin_2.png" alt="" />
          <motion.img src="/macshop/admin_3.png" alt="" />
        </div>
      </div>
    </div>
  );
};
