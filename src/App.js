import ClassList from "./components/ClassList";
import StudentList from "./components/StudentList";
import data from './data/data.json'
import { useState } from "react";




function App() {

  const [studentList, setStudentList] = useState([]);

  function displayAllStudents() {
    
    setStudentList(studentList => [...studentList, data])
    // Call function that displays each card
    
  }
  console.log(studentList)

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <ClassList displayAllStudents={displayAllStudents}/>
      <StudentList studentList={studentList} />
      
    </div>
  );
}

export default App;
