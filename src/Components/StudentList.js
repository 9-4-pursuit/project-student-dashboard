import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ studentList, typeCohort }) {
  return (
    <div className="student-list">
      <main>
        <h2>{typeCohort}</h2>
        <p>
          Total Students: <span>{studentList.length}</span>
        </p>
        <ul>
          {studentList.map((student, index) => {
            console.log(student);
            return (
              <li key={student.id}>
                <StudentCard student={student} key={index} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default StudentList;
