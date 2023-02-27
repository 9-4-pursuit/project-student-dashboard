import { useState } from "react";
import React from "react";

export default function Student({ student }) {
  const [comments, setComments] = useState([]);

  function handleComments(e) {
    e.preventDefault();
    const commenterName = e.target.elements.name.value;
    const comment = e.target.elements.comment.value;
    const newComment = `${commenterName} says ${comment}`;
    setComments([...comments, newComment]);
    e.target.reset();
  }
  return (
    <div className="studentInfo">
      <div className="codewars">
        <h4>Codewars:</h4>
        <p>
          <span>Current Total: </span>
          {student.codewars.current.total}
        </p>
        <p>
          <span>Last Week: </span>
          {student.codewars.current.lastWeek}
        </p>
        <p>
          <span>Goal: </span>
          {student.codewars.goal.total}
        </p>
        <p>
          <span>Percent of Goal Achieved: </span>
          {Math.floor(
            (student.codewars.current.total / student.codewars.goal.total) * 100
          )}
          %
        </p>
      </div>
      <div className="scores">
        <h4>Scores:</h4>
        <p>
          <span>Assignments: </span>
          {student.cohort.scores.assignments * 100}%
        </p>
        <p>
          <span>Projects: </span>
          {student.cohort.scores.projects * 100}%
        </p>
        <p>
          <span>Assessments: </span>
          {student.cohort.scores.assessments * 100}%
        </p>
      </div>
      <div className="certifications">
        <h4>Certifications:</h4>
        <p>
          <span>Resume: </span>
          {student.certifications.resume ? "✅" : "❌"}
        </p>
        <p>
          <span>LinkedIn: </span>
          {student.certifications.linkedin ? "✅" : "❌"}
        </p>
        <p>
          <span>Mock Interview: </span>
          {student.certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>
          <span>GitHub: </span>
          {student.certifications.github ? "✅" : "❌"}
        </p>
      </div>
      <form onSubmit={handleComments}>
        <label>
          Commenter Name
          <input type="text" name="name" />
        </label>
        <label>
          Comment
          <input type="text" name="comment" />
        </label>
        <button className="formButton" type="submit">Add Note</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
