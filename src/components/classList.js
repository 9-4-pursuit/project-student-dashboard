import React from "react";
import { useState } from "react";
import data from "./data/data.json";
import students from "./components/students";
import fall25 from "./components/fall25";
import fall26 from "./components/fall26";
import spring25 from "./components/spring25";
import spring26 from "./components/spring26";
import summer25 from "./components/summer25";
import summer26 from "./components/summer26";
import winter25 from "./components/winter25";
import winter26 from "./components/winter26";
//import individual css page as well after creation 

export default function classList() {

    return (
      <section className="classList">
      <students />
      <winter26 />
      <fall26 />
      <summer26 />
      <spring26 />
      <winter25 />
      <fall25 />
      <summer25 />
      <spring25 />
      {/* how to have text show up as links to another js in react  */}
      </section>
    )
}