import "./App.css";
import React from "react";
import { useState } from "react";
import Students from "./components/Students";
import ClassList from "./components/ClassList";
import IMAGE from './components/xu-haiwei-iE7AmEF-9wk-unsplash copy.jpg';
import data from "./data/data.json"

function App() {

  const [selectedClass, setSelectedClass] = useState("All Students");

  const [semester, setSemester] = useState("All Students");

  const [studentAmount, setStudentAmount] = useState(data.length);

  function updateShowcase(event) {

    setSelectedClass(event.target.name);

    setSemester(event.target.text);

    let filteredData = data.filter((student) => student.cohort.cohortCode === event.target.name);
    setStudentAmount(filteredData.length);
  } 

  return (
    <>
    <br></br>
    <div className="header">
      <h1 className="h1"> Student Dashboard </h1>
    </div>
    <br></br>
    <div className="showcase">
      <ClassList updateShowcase={updateShowcase}/>
      <Students updateShowcase={updateShowcase} semester={semester} data={data}
      selectedClass={selectedClass} IMAGE={IMAGE} studentAmount={studentAmount}/>
    </div>
    </>
  );
}

export default App;
