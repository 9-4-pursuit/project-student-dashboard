import React, { useState } from "react";
import CohortClassList from "./components/CohortClassList";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

function App() {
  //hooks for student list
  const [studentList, setStudentList] = useState(data);
  const [typeCohort, setTypeCohort] = useState("All Students")

  // const regex = /[0-9]/
  //   const season = el.slice(0, el.search(regex))
  //   const year = el.slice(el.search(regex), el.length)
  //   return `${season} ${year}`

//getting all students to display using sethook
   function displayAllStudents() {
    setTypeCohort("All Students")
   setStudentList((studentList) => [...data]);
  }

  function sortCohort(cohortCode) {
// studentList.filter(student => student.cohortCode ==== cohortCode)
setStudentList(data.filter(student => student.cohort.cohortCode === cohortCode.split(" ").join("")))
setTypeCohort(cohortCode)
  }


  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      {/* sending props */}
      <CohortClassList displayAllStudents={displayAllStudents} sortCohort={sortCohort}/>
      <StudentList studentList={studentList} typeCohort={typeCohort}/>
    </div>
  );
}

export default App;
