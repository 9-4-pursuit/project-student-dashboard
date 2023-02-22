import React, { useState } from "react";
import CohortClassList from "./components/CohortClassList";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

function App() {
  //hooks for student list
  const [studentList, setStudentList] = useState(data);
//getting all students to display using sethook
   function displayAllStudents() {
   setStudentList((studentList) => [...data]);
  }

  function sortCohort(cohortCode) {
// studentList.filter(student => student.cohortCode ==== cohortCode)
setStudentList(data.filter(student => student.cohort.cohortCode === cohortCode))
  }

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      {/* sending props */}
      <CohortClassList displayAllStudents={displayAllStudents} sortCohort={sortCohort}/>
      <StudentList studentList={studentList} />
    </div>
  );
}

export default App;
