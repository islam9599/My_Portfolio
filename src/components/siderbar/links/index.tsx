import React from "react";
import { motion } from "framer-motion";

const items = [
  "Homepage",
  "Skills",
  "Abu_Macshop_Uz",
  "Abu_Macshop_Admin",
  "Other_Projects",
  "Contact",
];

export const Links = () => {
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};
