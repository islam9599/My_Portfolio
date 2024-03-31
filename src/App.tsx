import React from "react";
import "./scss/app.scss";

import { Test } from "./test";
import { Navbar } from "./components/navbar";
import { AboutMe } from "./screen/aboutMe";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <AboutMe />
      </section>
      <section id="Skills">Skills</section>
      <section id="Abu_Macshop_Uz">Abu_Macshop_Uz</section>
      <section id="Abu_Macshop_Admin">Abu_Macshop_Admin</section>
      <section id="Other_Projects">Other_Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
