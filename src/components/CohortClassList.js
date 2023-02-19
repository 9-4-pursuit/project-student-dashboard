import React from "react";

export default function CohortClassList({ displayAllStudents }) {
  
  return (
    <div className="CohortList">
      <aside>
        <h2>Choose a class by start date</h2>
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4>Winter 2026</h4>
        <hr></hr>
        <h4>Fall 2026</h4>
        <hr></hr>
        <h4>Summer 2026</h4>
        <hr></hr>
        <h4>Spring 2026</h4>
        <hr></hr>
        <h4>Winter 2025</h4>
        <hr></hr>
        <h4>Fall 2025</h4>
        <hr></hr>
        <h4>Summer 2025</h4>
        <hr></hr>
      </aside>
    </div>
  );
}
