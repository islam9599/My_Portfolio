import React from "react";
import "./scss/app.scss";

import { Test } from "./test";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
