
import ClassList from "./components/ClassList";
import StudentList from "./components/StudentList";
import data from './data/data.json'
import { useState } from "react";


function App() {

  const [studentList, setStudentList] = useState([]);

  function displayAllStudents() {
    
    setStudentList(studentList => [...data])
    // Call function that displays each card

}
function sortCohort(cohortCode) {
    
  setStudentList(data.filter(student => student.cohort.cohortCode === cohortCode))
}
  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <ClassList displayAllStudents={displayAllStudents} sortCohort={sortCohort}/>
      <StudentList studentList={studentList} setStudentList={setStudentList}/>
      
    </div>
  );
  
}

export default App;