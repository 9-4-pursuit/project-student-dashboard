import React from "react";

function CohortClassList({ displayAllStudents, sortCohort }) {
  return (
    <div className="cohort-list">
      <aside>
        <h2 className="choose">
          Choose a class<br></br>by start date
        </h2>
        {/* map through cohort data */}
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2026")}>Winter 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2026")}>Fall 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2026")}>Summer 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2026")}>Spring 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2025")}>Winter 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2025")}>Fall 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2025")}>Summer 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2025")}>Spring 2025</h4>
        <hr></hr>
      </aside>
    </div>
  );
}

export default CohortClassList;
