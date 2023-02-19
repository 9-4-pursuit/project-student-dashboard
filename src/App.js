
import { useState } from "react";
import data from "./data/data.json"
import "./App.css";
import Cohorts from "./components/Cohorts";
import Students from "./components/Students";

function App() {

  //create a state for the students, with the data being default
  const [students, setStudents] = useState(data);


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
        data={data}/>

      <Students 
        students={students}
        />
    </div>
  );
}

export default App;
