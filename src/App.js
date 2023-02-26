
import { useState } from "react";
import data from "./data/data.json"
import "./App.css";
import Cohorts from "./components/Cohorts";
import Students from "./components/Students";

function App() {

  //create a state for the students, with the data being default
  const [students, setStudents] = useState(data);
  //create state for the number of students
  const [studentCount, setStudentCount] = useState(students.length)
  //create a state for class title
  const [classTitle, setClassTitle] = useState("All Students")

  

  return (
    <div 
      className="App">

      <header>
        <h1>Student Dashboard</h1>
      </header>

      {/* pass the data down as props */}
      <Cohorts 
        students={students}
        setStudents={setStudents}
        setStudentCount={setStudentCount}
        data={data}
        setClassTitle={setClassTitle}/>

      <Students 
        students={students}
        studentCount={studentCount}
        classTitle={classTitle}/>
    </div>
  );
}

export default App;
