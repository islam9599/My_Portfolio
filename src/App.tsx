import React from "react";
import "./scss/app.scss";
import { Navbar } from "./components/navbar";
import { AboutMe } from "./screen/aboutMe";
import { Skills } from "./screen/Skills";
import { MySkills } from "./screen/Skills/myResume";
import { MyProjects } from "./screen/myProjects";
import { MacshopDescription } from "./screen/myProjects/macshopDetails";
import { ErModelling } from "./screen/myProjects/erModelling";
import { AdminPanel } from "./screen/adminPanel";
import { OtherProjects } from "./screen/otherProjects";
import { Contact } from "./screen/contact";

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
      <section>
        <MacshopDescription />
      </section>
      <section>
        <ErModelling />
      </section>
      <section id="Abu_Macshop_Admin">
        <AdminPanel />
      </section>
      <section id="Other_Projects">
        <OtherProjects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
