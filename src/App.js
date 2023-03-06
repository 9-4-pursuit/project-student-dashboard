import { useState } from "react";
import data from "./data/data.json";
import ShowCohort from "./components/ShowCohort";
import StudentsInfo from "./components/StudentsInfo";

function App() {
  const [updateCard, setUpdateCard] = useState(data);
  const [cohortId, setCohortId] = useState("all");
  const [cohortTotal, setCohortTotal] = useState(data.length);

  function updateStudentsInfo(classCode) {
    const arrOfStudentInfo = [];
    data.forEach(student => {
      if (classCode === "all") {
        arrOfStudentInfo.push(student);
      } else if (classCode === student.cohort.cohortCode) {
        arrOfStudentInfo.push(student);
      }
    })
    setUpdateCard(arrOfStudentInfo);
  }

  return (
    <>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <div className="cohort">
          <ShowCohort
            data={data}
            setCohortId={setCohortId}
            setCohortTotal={setCohortTotal}
            updateStudentsInfo={updateStudentsInfo}
          />
        </div>

        <div className="students">
          <div className="searchResult">
            <h3>
              {
                cohortId === "all"
                  ? "All Students"
                  : cohortId.slice(0, -4) + " " + cohortId.slice(-4)
              }
            </h3>
            <p>Total Students: <span className="toGreen">{cohortTotal}</span></p>
          </div>

          <div className="cards">
            {
              updateCard.map((student) => {
                return (
                  <StudentsInfo
                    key={`${cohortId}-${student.id}`}
                    student={student}
                  />
                )
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;