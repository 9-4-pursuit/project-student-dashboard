// import { useEffect } from "react";
// import { useState } from "react";
// import data from '../data/data.json'


export default function CohortList({ displayAllStudents, displayCohortStudents }) {

  return (
    <div className="CohortList">
      <aside>
        <h2>Choose a Class by Start Date</h2>
        <h4 onClick={displayAllStudents} >All Students</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Winter2026')} >Winter 2026</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Fall2026')} >Fall 2026</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Summer2026')} >Summer 2026</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Spring2026')} >Spring 2026</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Winter2025')} >Winter 2025</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Fall2025')} >Fall 2025</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Summer2025')} >Summer 2025</h4>
        <hr></hr>
        <h4 onClick={() => displayCohortStudents('Spring2025')} >Spring 2025</h4>
        <hr></hr>
      </aside>
    </div>
  )
}


  // const [cohorts, setCohorts] = useState([])
  
  // function generateCohortList() {
  //   const cohortArray = []
  //   data.map(student => {
  //     const cohort = student.cohort.cohortCode
  //     if (!cohortArray.includes(cohort)) {
  //       cohortArray.push(cohort);
  //     }
  //   })
  //   console.log(cohortArray)
  // }

  // useEffect(() => {
  //   generateCohortList();
  // }, data)