// import React from "react";
import { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import data from './data/data.json'


function App() {
  
  // const [studentList, setStudentList] = useState()
  const [studentList, setStudentList] = useState(data)
  const [createCohort, setCreateCohort] = useState("All Students")


  // call a function to update the student list
  function displayAllStudents() {
    // if(id.value === student.cohort.cohortCode){
    // setStudentList(studentList => [...studentList])
    // }
    setStudentList(studentList => [...data])
    // setStudentList(studentList => [...studentList, ...data])
    //setStudentList([...studentList, ...data])
  }

  function sortCohort(cohortCode){

    // console.log(cohortCode)
    // console.log(studentList.filter(student => student.cohort.cohortCode === cohortCode))
   
    // setStudentList(studentList.filter(student => student.cohort.cohortCode === cohortCode))
    setStudentList(data.filter(student => student.cohort.cohortCode === cohortCode.split(' ').join('')))
    setCreateCohort(cohortCode)
  }

//  function onTrack(student) {
//   if(student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.codewars.current.total > 600 ){
//     setOnTrack('On Track')
//   }

//  }

  

  // function sortCohort() {

  // }


  // function to filter student


  //if button.value === student.cohort.cohortCode.value


  // map through data and check if student.cohort.cohortCode.includes() "cohortCode" key value of the cohort clicked
  // student.cohort.cohortCode.includes(button.value)            
  // give each clickable cohort a value or id:
  //
  // give the "all students" button the value of all the 
  


  return (
    <div className="app">
      <header><h1>Student Dashboard</h1></header>
      <CohortList displayAllStudents={displayAllStudents}
      sortCohort={sortCohort}/>
      <StudentList studentList={studentList} createCohort={createCohort} />
    </div>
  );
}

export default App;
