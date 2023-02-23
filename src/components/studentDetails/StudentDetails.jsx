import OneOnOne from "../OneOnOne/OneOnOne";
import "./StudentDetails.css";

export default function studentDetails({ student }) {
  const { codewars, certifications, cohort } = student;
  const codewarsPercent = (
    (codewars.current.total / codewars.goal.total) *
    100
  ).toFixed();

  return (
    <>
      <div className="student-details">
        <div className="codewars">
          <p className="p-progress">Codewars</p>
          <p className="p-details">
            Current Total: <span>{codewars.current.total}</span>
          </p>
          <p className="p-details">
            Last Week: <span>{codewars.current.lastWeek}</span>
          </p>
          <p className="p-details">
            Goal: <span>{codewars.goal.total}</span>
          </p>
          <p className="p-details">
            Percent of Goal Achieved: <span>{codewarsPercent}%</span>
          </p>
        </div>
        <div className="scores">
          <p className="p-progress">Scores</p>
          <p className="p-details">
            Assignments: <span>{cohort.scores.assignments * 100}%</span>
          </p>
          <p className="p-details">
            Projects: <span>{cohort.scores.projects * 100}% </span>
          </p>
          <p className="p-details">
            Assessments: <span>{cohort.scores.assessments * 100}% </span>
          </p>
        </div>
        <div className="certifications">
          <p className="p-progress">Certifications</p>
          <p className="p-details">
            Resume: {certifications.resume ? "✅" : "❌"}
          </p>
          <p className="p-details">
            LinkedIn: {certifications.linkedin ? "✅" : "❌"}
          </p>
          <p className="p-details">
            Mock Interview: {certifications.mockInterview ? "✅" : "❌"}
          </p>
          <p className="p-details">
            Github: {certifications.github ? "✅" : "❌"}
          </p>
        </div>
      </div>
      <hr />
      <OneOnOne student={student} />
    </>
  );
}
