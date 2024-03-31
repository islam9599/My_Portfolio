import React from "react";
import "../../scss/navbar.scss";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Sidebar } from "../siderbar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Islombek (David) Ergashev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/islombek.ergashev.315/">
            <img src="/images/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/eislombek9995/">
            <img src="/images/instagram.png" alt="" />
          </a>
          <a href="https://github.com/islam9599">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
