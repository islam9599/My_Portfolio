import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../scss/my_projects.scss";

export const MyProjects = (props: any) => {
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
        <div className="text_wrapper">
          <motion.h1 style={{ y: yBg }}>Abu Macshop Uz</motion.h1>
          <a href="http://abu-macshop.uz/">http://abu-macshop.uz/</a>
          <span>
            <strong> Description:</strong> I've developed a comprehensive
            full-stack web application utilizing the MVC architecture. This
            platform offers users a reliable space to browse and purchase
            products related to electronic devices. This platform is very user
            friendly with creating blogs and live chat among users!
          </span>
          <span>
            <strong>Functionality:</strong> The project boasts a range of
            functionalities, including user authentication and login
            capabilities. Users can create and publish blog posts. They can add
            items to their shopping cart and proceed through the checkout
            process seamlessly. The application features real-time chat
            functionality for users to engage with others, as well as the option
            to leave comments on products and blog posts. Users can also follow
            and unfollow other users, explore their profiles, and sort products
            based on their preferences. Furthermore, there's a search feature
            available on the products page. Users receive notifications from the
            admin to stay updated
          </span>
          <motion.img src="/macshop/products_1.png" alt="" />
        </div>
        <div className="img_wrapper">
          <motion.img src="/macshop/home.png" alt="" />
          <motion.img src="/macshop/home_1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
