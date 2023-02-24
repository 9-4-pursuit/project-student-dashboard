import React from "react";
import { useState } from "react";
import data from "./data/data.json";
import "./App.css";
import students from "./components/students";
import fall25 from "./components/fall25";
import fall26 from "./components/fall26";
import spring25 from "./components/spring25";
import spring26 from "./components/spring26";
import summer25 from "./components/summer25";
import summer26 from "./components/summer26";
import winter25 from "./components/winter25";
import winter26 from "./components/winter26";


function App() {

  const [theStudents, setTheStudents] = useState(data);

  const [studentAmount, setStudentAmount] = useState(theStudents.length)

  const [studentsBySemester, setStudentsBySemester] = useState("All Students")

  return (
    <>
    <br></br>
    <div className="header">
      <h1 className="h1"> Student Dashboard </h1>
    </div>
    <br></br>
    <div className="showcase">
    <section className="classList">
      <h2 className="chooseClassH2"> Choose Class by Semester </h2>
      <classList />
      {/* how to show the class list as links and p's here . you can pass that info dowwn as props with classList*/}
    </section>
    <section className="students">
      <h2> {studentsBySemester} </h2>
      <p className="studentAmount"> Total Students: {studentAmount} </p>
      <students />
    </section> 
    </div>
    </>
  );
}

export default App;
