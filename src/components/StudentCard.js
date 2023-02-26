
import { useState } from "react";


export default function StudentCard({ student }) {
  const [toggleMore, setToggleMore] = useState(false);

function showMore() {
  setToggleMore(!toggleMore);
}

const baseURL = "https://robohash.org/"
let randomNumber = Math.floor(Math.random() * 10000)
let Photo = `${baseURL}${randomNumber}`


let studentDate = new Date(student.dob).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


const [comments, setComments]  = useState([])

const handleComments = (event) => {
    event.preventDefault();
    const commenterName = event.target.elements["Commenter Name"].value
    const commentText = event.target.elements["Comment"].value;
    const newComment = `${commenterName}: ${commentText}`;
    setComments([...comments, newComment]);
    event.target.reset();
};

const isOnTrack  = () => {
  if (
    student.certifications.resume === true &&
    student.certifications.linkedin === true &&
    student.certifications.github === true &&
    student.certifications.mockInterview === true
  ) {
    return <p>On track to Graduate</p>;
  }
};

let percentageColor;
const percentage = Math.round(
  (student.codewars.current.total / student.codewars.goal.total) * 100
);
if (percentage >= 100) {
  percentageColor = "green";
} else if (percentage >= 50) {
  percentageColor = "yellow";
} else {
  percentageColor = "red";
}




  return (
      <div className="student-card">
          
          <img className="img" src={Photo} alt="" />
          <div className="onTrack"><strong>{isOnTrack()}</strong></div>
          {/* <img className="img" src={student.profilePhoto} alt={student.username}/> */}
          <h2><strong>{student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}</strong></h2>
          <p>{student.username}</p>
          <p>Birthday: {studentDate} </p>
          {/* <p>On Track to Graduate</p> */}
          <br></br>

          <p className="showMore" style={{ color: 'red' }} onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
          {toggleMore ? (
            <div className="info">
              <div className="codewars">
                <h2>Codewars:</h2>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p>
                  Percent of Goal Achieved: 
                  <span style={{ color: percentageColor }}> {percentage}%</span>
                  {/* {Math.round( 
                    (student.codewars.current.total / student.codewars.goal.total) * 100)}% */}
                </p>
              </div>

              <div className="scores">
              <h2>Scores:</h2>
                <p>Assignments: {student.cohort.scores.assignments * 100} %</p>
                <p>Projects: {student.cohort.scores.projects * 100} %</p>
                <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
              </div>

              <div className="certifications">
              <h2>Certifications:</h2>
                <p>Resume: {student.certifications.resume ? "  ✅ " : " ❌" }</p>
                <p>LinkedIn: {student.certifications.linkedin ? " ✅" : " ❌" }</p>
                <p>Mock Interview: {student.certifications.mockInterview ? " ✅" : " ❌" }</p>
                <p>Github: {student.certifications.github ? " ✅" : " ❌" }</p>
              </div>

              <hr></hr>
        <div className="comment-section">
        <h2>1-on-1 Notes</h2>
        <form className="comment" onSubmit={handleComments}>
            <label htmlFor="Commenter Name">Commenter Name</label>
            <input type="text" name="Commenter Name" />
            <br></br>
            <label htmlFor="Comment">Comment</label>
            <input type="text" name="Comment" />
            <br></br>
            <button type="submit">Add Note</button>
            </form>    
        {comments.map((comment, index) => (
          // console.log(comments)
            <div key={index}>{comment.comments}</div>
        ))}    
        </div>

            </div>
          ) : null }

      </div>
  )
}

// " ✔️" : " ✘❌" ✔️  ☑️✅  ✓ ✔️ ✓  ☑️  ✓  ✔  ✔️  ✔️  "✔️"