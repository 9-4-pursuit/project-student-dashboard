import React from "react";
import StudentCard from "./StudentCard";


export default function StudentList({ studentList, typeCohort  }) {
  return (
    <div className="StudentList">
      <main>
        <h2>{typeCohort}</h2>
        <h4>Total Students: {studentList.length}</h4>
        <ul>
          {studentList.map((student) => {
            return (
              
              <li key={student.id}><StudentCard student={student}/></li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
