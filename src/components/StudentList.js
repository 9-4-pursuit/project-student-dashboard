import React from "react";
import StudentCard from "./StudentCard";


export default function StudentList({ studentList }) {
  return (
    <div className="StudentList">
      <main>
        <h2>All Students</h2>
        <p>Total Students: {studentList.length}</p>
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
