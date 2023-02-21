
export default function StudentDetails() {

  return (<div
    className="Student-details">
    <div
      className="codewars">
      <h3>Codewars:</h3>
      <p><span>Current Total:</span> {}</p>
      <p><span>Last Week:</span> {}</p>
      <p><span>Goal:</span> {}</p>
      <p><span>Percent of Goal Achieved:</span> {}</p>
    </div>

    <div
      className="scores">
      <h3>Scores:</h3>
    </div>

    <div
      className="certifications">
      <h3>Certifications:</h3>
    </div>

  </div>)
}