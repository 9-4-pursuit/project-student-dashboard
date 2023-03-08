function Notes({ item }) {
  let { current, goal } = item.codewars;
  let { assignments, assessments, projects } = item.cohort.scores;
  let { github, linkedin, mockInterview, resume } = item.certifications;
  let average = Math.floor((current.total / goal.total) * 100);

  // A percentage is shown for the student's CodeWars points that compares their current total to the goal total.
  // If it is equal to or greater than 100%, the percentage is shown as green.
  // If it is between 50% and 100%, the percentage is shown as yellow.
  // If it is less than 50%, the percentage is shown as red.

  let col = "";
  if (average < 50) {
    col = "red";
  } else if (average >= 50 && average < 100) {
    col = "gold";
  } else if (average >= 100) {
    col = "green";
  }

  return (
    <div className="notesWrapper">
      <div className="codeWars">
        <p>CodeWars:</p>
        <p>
          <span>Current Total:</span>
          {current.total}
        </p>
        <p>
          <span>Last Week:</span>
          {current.lastWeek}
        </p>
        <p>
          <span>Goal:</span>
          {goal.total}
        </p>
        <p>
          <span>Percent of Goal Archieved:</span>
          <span style={{ color: col }}>{average}%</span>
        </p>
      </div>

      <div className="scores">
        <p>Scores:</p>
        <p>
          <span>Assignments:</span>
          {assignments * 100} %
        </p>
        <p>
          <span>Projects:</span>
          {projects * 100} %
        </p>
        <p>
          <span>Assessments:</span>
          {assessments * 100} %
        </p>
      </div>

      <div className="certifications">
        <p>Certifications</p>
        <p>
          <span>Resume:</span>
          {resume ? "✔️" : "❌"}
        </p>
        <p>
          <span>LinkedIn:</span>
          {mockInterview ? "✔️" : "❌"}
        </p>
        <p>
          <span>Mock Interview:</span>
          {linkedin ? "✔️" : "❌"}
        </p>
        <p>
          <span>GitHub:</span>
          {github ? "✔️" : "❌"}
        </p>
      </div>
    </div>
  );
}

export default Notes;
