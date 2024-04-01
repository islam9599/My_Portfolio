import React from "react";
import "./scss/app.scss";
import { Navbar } from "./components/navbar";
import { AboutMe } from "./screen/aboutMe";
import { Skills } from "./screen/Skills";
import { MySkills } from "./screen/Skills/myResume";
import { MyProjects } from "./screen/myProjects";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <AboutMe />
      </section>
      <section id="My_Resume">
        <Skills type="skills" />
      </section>
      <section>
        <MySkills />
      </section>
      <section id="My_Projects">
        <Skills type="projects" />
      </section>
      <section>
        <MyProjects />
      </section>
      <section id="Abu_Macshop_Admin">Abu_Macshop_Admin</section>
      <section id="Other_Projects">Other_Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
