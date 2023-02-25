import { useState } from "react";
import data from "./data/data.json";
import ShowCohort from "./components/ShowCohort";
import StudentsInfo from "./components/StudentsInfo";

function App() {
  const [updateCard, setUpdateCard] = useState([]);
  const [cohortId, setCohortId] = useState("all");
  const [cohortTotal, setCohortTotal] = useState(250);
  
  function updateStudentsCard(student) {
    const { id, username, dob, profilePhoto,
      names, codewars, certifications, notes, cohort } = student;
    const fullName = names.preferredName + " " + names.middleName.charAt(0) + ". " + names.surname;
    const birthDay = new Date(dob).toLocaleString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });

    const studentInfo = {
      id: id,
      names: fullName,
      username: username,
      dob: birthDay,
      profilePhoto: profilePhoto,
      codewars: codewars,
      certifications: certifications,
      notes: notes,
      cohort: cohort
    };

    return studentInfo;
  }

  if (updateCard.length === 0) {
    updateStudentsInfo("all")
  }

  function updateStudentsInfo(classCode) {
    const arrOfStudentInfo = [];
    data.forEach(student => {
      if (classCode === "all") {
        arrOfStudentInfo.push(updateStudentsCard(student))
      } else if (classCode === student.cohort.cohortCode) {
        arrOfStudentInfo.push(updateStudentsCard(student))
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
            <h3>{
              cohortId === "all"
                ? "All Students"
                : cohortId.slice(0, -4) + " " + cohortId.slice(-4)
              }
            </h3>
            <p>Total Students: <span className="toGreen">{cohortTotal}</span></p>
          </div>

          <div className="cards">
            {
              updateCard.map((student, index) => {
                return (
                  <StudentsInfo student={student} key={index} />
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