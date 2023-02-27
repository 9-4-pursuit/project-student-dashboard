import { useState } from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import "./index.css"
import  studentData from "./data/data.json"


function App() {

  const [students, setStudents] = useState(studentData)
  const [cohorts, setCohort] = useState("AllStudents")
  
  

  let cohortObj = {
    AllStudents: 250,
    Winter2026: 0,
    Fall2026: 0,
    Summer2026: 0,
    Spring2026: 0,
    Winter2025: 0,
    Fall2025: 0,
    Summer2025: 0,
    Spring2025: 0
  }

  

  function determineTotal() {
    studentData.map((student) => {
      if(!cohortObj[student.cohort.cohortCode]){
       cohortObj[student.cohort.cohortCode] = 1
      } else if(cohortObj[student.cohort.cohortCode]) {
      cohortObj[student.cohort.cohortCode] += 1
      }
    })
  }
  determineTotal()

   function determineCohort(cohort) {
    setCohort(cohort)
   }

   

  return (
    <div className="App">
      <h1 className="heading">Student Dashboard</h1>
      <CohortList cohortObj={cohortObj} callback={determineCohort}/>
      <StudentList studentData={students} cohorts={cohorts} cohortObj={cohortObj}/>
    </div>
  );
}

export default App;
