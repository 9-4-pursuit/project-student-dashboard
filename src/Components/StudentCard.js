import React from "react";
import { useState } from "react";
//import ya state cephus
function StudentCard({ student }) {
  const studentDate = new Date(student.dob).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [notes, setNotes] = useState([...student.notes])
  


  // const [comments, setComments] = useState([]);

  const handleComments = (event) => {
    event.preventDefault();
    const commenterName = event.target.elements["Commenter Name"].value;
    const commentText = event.target.elements.Comment.value;
    const newComment = `${commenterName} says "${commentText}"`;
    const newCommentNote = {"commenter": commenterName, "comment": commentText} 
    student.notes.push(newCommentNote)
    setNotes([...student.notes])
   
    // setComments([...comments, newComment]);
    event.target.reset();
  };
  console.log(notes)

  const [toggleMore, setToggleMore] = useState(false);
  function showMore() {
    setToggleMore(!toggleMore);
  }

  function getScoreColor(score) {
    let color = '';
    if (score > 75) {
      color = 'green';
    } else if (score >= 61 && score <= 75) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    return color;
  }

  // function studentScores ({ student })
  const assignmentScore = student.cohort.scores.assignments * 100;
  const projectScore = student.cohort.scores.projects * 100;
  const assessmentScore = student.cohort.scores.assessments * 100;
  const warCode = Math.round(
    (student.codewars.current.total /
      student.codewars.goal.total) *
      100
  )
  
  // lets replace dem images
  const BASE_URL = "https://robohash.org/";
  const roboNum = Math.floor(Math.random() * 1000);
  const srcPhoto = `${BASE_URL}${roboNum}`;
  const cwScore = (
    student.codewars.current.total /
    (student.codewars.goal.total / 100)
  ).toFixed(0);
  //change the state for toggleMore and negate it  -- setting changes state

  return (
    <div className="student-card">
      <img className="img" src={srcPhoto} alt={student.username} />
      <h5 className="track">
        {cwScore < 600 &&
        student.certifications.resume === false &&
        student.certifications.linkedin === false &&
        student.certifications.github === false
          ? " Not On Track to Graduate"
          : "On Track to Graduate"}
      </h5>
      <h2>
        <strong>
          {student.names.preferredName}{" "}
          {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </strong>
      </h2>
      <p className="email">{student.username}</p>
      <p className="date">
        <span>Birthday:</span> {studentDate}
      </p>
      <br></br>
      <p className="toggle" onClick={() => showMore()}>
        {toggleMore ? "Show Less..." : "Show More..."}
      </p>

      {toggleMore ? (
        <div className="display">
          <div className="info">
            <div className="codewars">
              <h4>
                <strong>Codewars</strong>
              </h4>
              <p className="current">
                Current Total: {student.codewars.current.total} 
              </p>
              <p className="last">
                Last Week: {student.codewars.current.lastWeek}
              </p>
              <p className="goal">Goal: {student.codewars.goal.total}</p>
              <p>
                Percent of Goal Achieved: <span style={{ color: getScoreColor(warCode) }}>{warCode}%</span>
              </p>
            </div>

            <div className="scores">
              <h4>
                <strong>Scores</strong>
              </h4>
              <p>Assignments: <span style={{ color: getScoreColor(assignmentScore) }}>{assignmentScore}%</span></p>
              <p>Projects: <span style={{ color: getScoreColor(projectScore) }}>{projectScore}%</span></p>
              <p>Assessments: <span style={{ color: getScoreColor(assessmentScore) }}>{assessmentScore}%</span></p>
            </div>

            <div className="certifications">
              <h4>
                <strong>Certifications</strong>
              </h4>

              <p>Resume: {student.certifications.resume ? " ✔" : " ✗"}</p>
              <p>LinkedIn: {student.certifications.linkedin ? " ✔" : " ✗"}</p>
              <p>
                Mock Interview:{" "}
                {student.certifications.mockInterview ? " ✔" : " ✗"}
              </p>
              <p>Github: {student.certifications.github ? " ✔" : " ✗"}</p>
            </div>
          </div>

          <div className="comment-section">
            <h2>1-on-1 Notes</h2>
            <form className="comments" onSubmit={handleComments}>
              <label htmlFor="Commenter Name">Commenter Name: </label>
              <input type="text" name="Commenter Name" />
              <br />
              <label htmlFor="Comment">Comment: </label>
              <input type="text" name="Comment" />
              <br />
              <button type="submit">Add Note</button>
            </form>
            {notes.map((note, index) => (
              <div className="comment" key={index}>
                {note.commenter} says "{note.comment}"
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}


//* add infinite scroll ?? PAGINATION ----> nah just basic CSS float
//* get into habit of defining each level of functionality ----> absolutely Cephus.

export default StudentCard;
