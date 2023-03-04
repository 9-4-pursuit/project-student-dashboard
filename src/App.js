import React from "react";
import CohortClassList from "./components/CohortClassList";
import StudentList from "./components/StudentList";
import data from './data/data2.json'
import { useState } from "react";


function App() {
  const [studentList, setStudentList] = useState(data);
  const [typeCohort, setTypeCohort] = useState("All Students");

  function displayAllStudents() {
    setTypeCohort("All Students")
    setStudentList((studentList) => [...data]);
}

  function sortCohort(cohortCode) {
    setStudentList(data.filter((student) => student.cohort.cohortCode === cohortCode.split(' ').join('')));
    setTypeCohort(cohortCode);
  }
  
  
  return (
    <div className="App">
      
      <header><h1>Student Dashboard</h1></header>
      {/* <h1 style={{ animation: "glow 2s infinite" }}>Student Dashboard</h1> */}
      <CohortClassList displayAllStudents={displayAllStudents} sortCohort={sortCohort}/>
      <StudentList studentList={studentList} typeCohort={typeCohort} />
      
    </div>
  );
  
}

export default App;