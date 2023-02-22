
export default function StudentDetails(props) {

  //assign the student prop to a variable
  const student = props.student;

  //function for determining codewars percentage color
  function compareCodewars() {

    //calculate percentage and return the correct color
    if (Math.round((student.codewars.current.total / student.codewars.goal.total) * 100) >= 100) {
      return "green";

    } else if (Math.round((student.codewars.current.total / student.codewars.goal.total) * 100) >=50) {
      return "yellow";

    } else {
      return "red";
    }
  }

  return (<div
    className="Student-details">
    <div
      className="codewars">
      <h3>Codewars:</h3>
      <p><span>Current Total:</span> {student.codewars.current.total}</p>
      <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
      <p><span>Goal:</span> {student.codewars.goal.total}</p>
      {/* calculate the percentage and set the corresponding color */}
      <p><span>Percent of Goal Achieved:</span> <span style={{color: compareCodewars()}}>{Math.round((student.codewars.current.total / student.codewars.goal.total) * 100)}%</span></p>
    </div>

    <div
      className="scores">
      <h3>Scores:</h3>
      <p><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</p>
      <p><span>Projects:</span> {student.cohort.scores.projects * 100}%</p>
      <p><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</p>
    </div>

    <div
      className="certifications">
      <h3>Certifications:</h3>
      <p><span>Resume:</span> {student.certifications.resume ? "✅" : "❌"}</p>
      <p><span>LinkedIn:</span> {student.certifications.linkedin ? "✅" : "❌"}</p>
      <p><span>Mock Interview:</span> {student.certifications.mockInterview ? "✅" : "❌"}</p>
      <p><span>Github:</span> {student.certifications.github ? "✅" : "❌"}</p>
    </div>
    
  </div>)
}