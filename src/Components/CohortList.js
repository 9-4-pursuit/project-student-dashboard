const CohortList = ({sortedCohort, displayAllStudents}) => {
  return (
    <div className="cohortList">
      <aside>
        <br />
      <h2>Choose a class by Start Date</h2>
        <h4 onClick={displayAllStudents}>All Students</h4>
          <hr />
          <h3 onClick={() => sortedCohort("Winter 2026")}>Winter 2026</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Fall 2026")}>Fall 2026</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Summer 2026")}>Summer 2026</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Spring 2026")}>Spring 2026</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Winter 2025")}>Winter 2025</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Fall 2025")}>Fall 2025</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Summer 2025")}>Summer 2025</h3>
          <hr />
          <h3 onClick={() => sortedCohort("Spring 2025")}>Spring 2025</h3>
          <hr />
        </aside>
      </div>
    )
  }

export default CohortList;
