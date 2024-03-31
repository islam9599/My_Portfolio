import React from "react";
import "../../scss/navbar.scss";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Islam9599(David) Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/images/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/instagram.png" alt="" />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
