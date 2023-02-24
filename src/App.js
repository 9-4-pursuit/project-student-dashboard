import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import data from './data/data.json'
import { useState, useEffect } from "react";

function App() {

  const [studentList, setStudentList] = useState([]);
  const [listTitle, setListTitle] = useState('All Students')
  // const [selectedCohort, setSelectedCohort] = useState('')

  function displayAllStudents() {
    setStudentList([]);
    setStudentList(studentList => [...studentList, ...data])
    setListTitle('');
    setListTitle('All Students')
  }

  function displayCohortStudents(clickedCohort) {
    
    setStudentList([]);
    data.map((student) => {
      if (student.cohort.cohortCode === clickedCohort) {
        setStudentList(studentList => [...studentList, student])
      }
    })
    
    clickedCohort = clickedCohort.substring(0, clickedCohort.length - 4) + ' ' + clickedCohort.substring(clickedCohort.length - 4, clickedCohort.length)
    setListTitle(clickedCohort);
  }

  useEffect(() => {
    displayAllStudents();
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      < CohortList 
          displayAllStudents={displayAllStudents} 
          displayCohortStudents={displayCohortStudents}  
      />
      < StudentList studentList={studentList} data={data} listTitle={listTitle} />
    </div>
  );
}

export default App;
