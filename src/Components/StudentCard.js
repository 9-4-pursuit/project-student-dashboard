import { useState } from "react"


export default function StudentCard({ student }) {

  const [toggleMore, setToggleMore] = useState(false)
  const [notes, setNotes] = useState([...student.notes])


  const birthDate = new Date(student.dob).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  
  

  function showMore() {
    setToggleMore(!toggleMore)
  }

  function gradTrack(student) {
    if(student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.codewars.current.total > 600 ){
     
      return "On Track to graduate"
    } else {  
      return "Not on Track to graduate"
    }
   }

   function commentHandle(event) {
    event.preventDefault();

    const commenterName = event.target.elements["Commenter Name"].value
    const commentText = event.target.elements.Comment.value
    const newCommentNote = {"commenter": commenterName, "comment": commentText}
    student.notes.push(newCommentNote)
    setNotes([...student.notes])
    event.target.reset()
  
   }

   const warScore = Math.round(
    (student.codewars.current.total / student.codewars.goal.total) * 100
  )

   function scoreColor(warScore) {
    let color = ''

    if(warScore >= 100) {
      color = 'green'
    }else if(warScore >= 50 && warScore <= 99) {
      color = 'yellow'
    }else {
      color = 'red'
    }
    return color
   }



  
  return (

    <div className="card">
      <img className="pic" src={student.profilePhoto} alt="" />
      <p className="track">{gradTrack(student)}</p>
      <h3>{student.names.preferredName} {student.names.surname}</h3>
      <p>{student.username}</p>
      <p>Birthday: {birthDate}</p>
      <br></br>
      <p onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
      {toggleMore ? (
        <div className="info">
          <div className="codewars">
            <p >Current Total: {student.codewars.current.total}</p>
            <p >Last Week: {student.codewars.current.lastWeek}</p>
            <p >Goal: {student.codewars.goal.total}</p>
            <p>
              Percent of Goal Achieved: <span style={{color: scoreColor(warScore)}}>
              {/* {Math.round(
                (student.codewars.current.total / student.codewars.goal.total) * 100
              )} */}
               {warScore}
              %
              </span>
            </p>
          </div>

          <div className="scores">
            <p>Assignment: {student.cohort.scores.assignments * 100} %</p>
            <p>Projects: {student.cohort.scores.projects * 100} %</p>
            <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
          </div>

          <div className="certifications">
            <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
            <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
            <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
            <p>Github: {student.certifications.github ? '✅' : '❌'}</p>
          </div>

          <div className="comment-section">
            <h2>1-on-1 Notes</h2>
            <form className="comments" onSubmit={commentHandle}>
              <label htmlFor="Commenter Name">Commenter Name: </label>
              <input type="text" name="Commenter Name" />
              <br/>
              <label htmlFor="Comment">Comment: </label>
              <input type="text" name="Comment"/>
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
  )
}



