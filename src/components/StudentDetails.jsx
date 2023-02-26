
function StudentDetails({ codewars, cohort, certifications }) {
  const { current, goal } = codewars;
  const { scores } = cohort;
  const { resume, linkedin, github, mockInterview } = certifications;
  const percentGoalAchieved = Math.round((current.total * 100) / goal.total);

  function changeColorByPercentage() {
    if (percentGoalAchieved >= 100) {
      return "#50C878"; //emerald green
    } else if (percentGoalAchieved >= 50) {
      return "#F9E076"; //macaroon yellow
    } else {
      return "#B80F0A"; //crimson red
    }
  }

  return (
    <div className="details">
      <div className="codewars">
          <h4>Codewars:</h4>
          <p><span className="toGreen">Current Total: </span>{current.total}</p>
          <p><span className="toGreen">Last Week: </span>{current.lastWeek}</p>
          <p><span className="toGreen">Goal: </span>{goal.total}</p>
          <p><span className="toGreen">Percent of Goal Achieved: </span>
            <span style={{ color: changeColorByPercentage() }}>
              {percentGoalAchieved}
            </span>
            %
          </p>
      </div>
      <div className="scores">
          <h4>Scores</h4>
          <p><span className="toGreen">Assignments: </span>{scores.assignments * 100}%</p>
          <p><span className="toGreen">Projects: </span>{scores.projects * 100}%</p>
          <p><span className="toGreen">Assessments: </span>{scores.assessments * 100}%</p>
      </div>
      <div className="certifications">
          <h4>Certifications</h4>
          <p><span className="toGreen">Resume: </span>{resume ? "✅" : "❌"}</p>
          <p><span className="toGreen">LinkedIn: </span>{linkedin ? "✅" : "❌"}</p>
          <p><span className="toGreen">Mock Interview: </span>{github ? "✅" : "❌"}</p>
          <p><span className="toGreen">GitHub: </span>{mockInterview ? "✅" : "❌"}</p>
      </div>
    </div>
  );
}
  
export default StudentDetails;