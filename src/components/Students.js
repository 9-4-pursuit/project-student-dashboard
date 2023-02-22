
import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";

export default function Students({ students, studentCount, classTitle }) {

  return (<div
    className="Students">
    <h2>{classTitle}</h2>
    <p
      className="count">Total Students: <span>{studentCount}</span></p>

    {/* iterate through students */}
    {students.map((student) => {
      return (<StudentCard
        student={student}
        key={student.id}
      />)
    })}

  </div>)
}