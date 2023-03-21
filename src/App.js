import { useState } from "react";
import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";
const data = require("./data/data.json");

function App() {
  const [students, setStudents] = useState(data);

  const [cohortSeason, setCohortSeason] = useState("All Students");

  const findCohortSeason = (cohortCode) => {
    setStudents(
      data.filter(
        (student) =>
          student.cohort.cohortCode === cohortCode.split(" ").join("")
      )
    );
    setCohortSeason(cohortCode);
  };
  const showAllStudents = () => {
    setStudents(data);
    console.log(students);
    setCohortSeason("All Students");
    console.log(cohortSeason);
  };

  return (
    <div>
      <StudentList students={students} setStudents={setStudents} />
      <CohortList
        findCohortSeason={findCohortSeason}
        showAllStudents={showAllStudents}
      />
    </div>
  );
}

export default App;
