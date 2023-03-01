import {useState} from "react";
import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";
import data from "./data/data.json";

import "./index.css"

function App() {
  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState("All Students");

  function displayAllStudents() {
    setHeading("All Students")
    setCohort(() => [...data]);
  }

  function sortedCohort(cohortCode) {
    setCohort(data.filter((student) => student.cohort.cohortCode === cohortCode.split(' ').join('')));
    setHeading(cohortCode);
  }

  return (
    <div id="header">
      <h1>Student Dashboard</h1>
      <div className="App">
      <CohortList
        displayAllStudents={displayAllStudents}
        sortedCohort={sortedCohort}
      />
      <StudentList 
        data={cohort} 
        setCohort={setCohort} 
        heading={heading}
        setHeading={setHeading}
      />
      </div>
    </div>
  );
}

export default App;
