import { useState } from "react"


export default function StudentCard({ student }) {

  const [toggleMore, setToggleMore] = useState(false)
  // const [onTrack, setOnTrack] = useState("")
  

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
  
  return (

    <div className="card">
      <img className="pic" src={student.profilePhoto} alt="" />
      <p className="track">{gradTrack(student)}</p>
      <h3>{student.names.preferredName} {student.names.surname}</h3>
      <p>{student.username}</p>
      <p>Birthday: {student.dob}</p>
      <br></br>
      <p onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
      {toggleMore ? (
        <div className="info">
          <div className="codewars">
            <p>Current Total:{student.codewars.current.total}</p>
            <p>Last Week:{student.codewars.current.lastweek}</p>
            <p>Goal:{student.codewars.goal.total}</p>
            <p>
              Percent of Goal Achieved:
              {Math.round(
                (student.codewars.current.total / student.codewars.goal.total) * 100
              )}
              %
            </p>
          </div>

          <div className="scores">
            <p>Assignment:{student.cohort.scores.assignments * 100} %</p>
            <p>Projects:{student.cohort.scores.projects * 100} %</p>
            <p>Assessments:{student.cohort.scores.assessments}</p>
          </div>

          <div className="certifications">
            <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
            <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
            <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
            <p>Github:{student.certifications.github ? '✅' : '❌'}</p>
          </div>
        </div>
      ) : null}

    </div>
  )
}



