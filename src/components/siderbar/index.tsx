import React, { useState } from "react";
import "../../scss/sidebar.scss";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToggleButton } from "./toggleButton";
import { Links } from "./links";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 10,
      damping: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
