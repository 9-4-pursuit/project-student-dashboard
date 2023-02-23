import { useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Header from "./components/header/Header";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data";

function App() {
  const [students] = useState(data);
  const [filteredStudents, setFilteredStudents] = useState(data);

  const [selectedCohort, setSelectedCohort] = useState("All Students");

  function filterStudentsByCohort(cohort) {
    let newStudents;
    if (cohort === "All Students") {
      newStudents = students;
    } else {
      newStudents = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
    }
    setSelectedCohort(cohort);
    setFilteredStudents(newStudents);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <CohortList
          filteredStudents={filteredStudents}
          filterStudentsByCohort={filterStudentsByCohort}
        />
        <StudentList
          students={filteredStudents}
          selectedCohort={selectedCohort}
        />
      </main>
    </div>
  );
}

export default App;
