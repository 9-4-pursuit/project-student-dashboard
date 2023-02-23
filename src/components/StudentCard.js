import React, { useState } from "react";

export default function StudentCard({ student }) {
  const [toggleMore, setToggleMore] = useState(false);
  const [toggleOnTrack, setToggleOnTrack] = useState(false);

  function onTrack() {
    setToggleOnTrack(!toggleOnTrack)
  }

  function showMore() {
    setToggleMore(!toggleMore)
  }

  return (
    <div className="StudentCard">
      <img className="img" src={student.profilePhoto} alt="" />
      <h3>
        <strong>
          {student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </strong>
      </h3>
      <p>{student.username}</p>
      <p>Birthday: {student.dob}</p>
      <br></br>
      {/* set the onclick for show more but default is no info */}
      <p className="showmore" onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
      {/* setting toggle to include info */}
      {toggleMore ? (
        <div className="info">
          <div className="codewars">
            <h4><strong>Codewars</strong></h4>
            <p>Current Total: {student.codewars.current.total}</p>
            <p>Last Week: {student.codewars.current.lastWeek}</p>
            <p>Goal: {student.codewars.goal.total}</p>
            <p>
              Percent of Goal Achieved:
              {Math.round(
                (student.codewars.current.total / student.codewars.goal.total) * 100
              )} %
            </p>
          </div>

        <div className="scores">
          <h4><strong>Scores</strong></h4>
          <p>Assignments: {student.cohort.scores.assignments * 100} %</p>
          <p>Projects: {student.cohort.scores.projects * 100} %</p>
          <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
        </div>

        <div className="certifictations">
          <h4><strong>Certification</strong></h4>
          <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
          <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
          <p>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</p>
          <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
          <div/>
        </div>

        </div>

        ) : null }
    
    <div className="onTrack">
    <p onClick={() => onTrack()}>{toggleOnTrack ? "Show Less..." : "On Track to Graduate"}</p>
    </div>

    </div>
    );
  }
