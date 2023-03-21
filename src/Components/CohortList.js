export default function CohortList({ showAllStudents, findCohortSeason }) {
  return (
    <div>
      <div className="cohort">
        <h3>Choose a Class by Start Date</h3>
        <h4 onClick={() => showAllStudents()}> All Students</h4>

        <h4 onClick={() => findCohortSeason("'Winter 2026'")}> Winter 2026</h4>

        <h4 onClick={() => findCohortSeason("Fall 2026")}>Fall 2026</h4>

        <h4 onClick={() => findCohortSeason("Summer 2026")}>Summer 2026</h4>

        <h4 onClick={() => findCohortSeason("Spring 2026")}>Spring 2026</h4>

        <h4 onClick={() => findCohortSeason("Winter 2025")}>Winter 2025</h4>

        <h4 onClick={() => findCohortSeason("Fall 2025")}>Fall 2025</h4>

        <h4 onClick={() => findCohortSeason("Summer 2025")}>Summer 2025</h4>

        <h4 onClick={() => findCohortSeason("Spring 2025")}>Spring 2025</h4>
      </div>
    </div>
  );
}
