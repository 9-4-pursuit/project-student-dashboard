

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




  return (
      <div className="student-card">

          <img className="img" src={Photo} alt="" />
          <div className="onTrack"><strong>On Track to Graduate</strong></div>
          {/* <img className="img" src={student.profilePhoto} alt={student.username}/> */}
          <h3><strong>{student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}</strong></h3>
          <p>{student.username}</p>
          <p>Birthday: {studentDate} </p>
          {/* <p>On Track to Graduate</p> */}
          <br></br>

          <p onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
          {toggleMore ? (
            <div className="info">
              <div className="codewars">
                <p>Current Total:{student.codewars.current.total}</p>
                <p>Last Week:{student.codewars.current.lastWeek}</p>
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
                <p>Assignments:{student.cohort.scores.assignments * 100} %</p>
                <p>Projects:{student.cohort.scores.projects * 100} %</p>
                <p>Assessments:{student.cohort.scores.assessments * 100} %</p>
              </div>

              <div className="certifications">
                <p>Resume:{student.certifications.resume ? " ✔" : " ✘" }</p>
                <p>LinkedIn:{student.certifications.linkedin ? " ✔" : " ✘" }</p>
                <p>Mock Interview:{student.certifications.mockInterview ? " ✔" : " ✘" }</p>
                <p>Github:{student.certifications.github ? " ✔" : " ✘" }</p>
              </div>
            </div>
          ) : null }
      </div>
  )
}
