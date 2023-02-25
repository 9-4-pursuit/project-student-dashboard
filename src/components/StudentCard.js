import { useState } from "react"

export default function StudentCard( { student }) {

  const [showMore, setShowMore] = useState(false);
  const [showMoreText, setShowMoreText] = useState('Show more...')

  const dateFormatting = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  function OnTrack({ resume, linkedin, mockInterview, codewars }) {
    if (resume === true && linkedin === true && mockInterview === true && codewars > 600) {
      return <p>On Track to Graduate</p>
    }
  }

  function handleShowMore() {
    setShowMore(!showMore)
    if(!showMore) {
      setShowMoreText('Show less...')
    } else {
      setShowMoreText('Show more...')
    }
  }

  function ShowMore({ codewars, scores, certs }) {
    if (showMore) {
      return (
        <div className="show-more">
          <h4>Codewars:</h4>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p> 
            <p>Percent of Goal Achieved: {Math.round((codewars.current.total / codewars.goal.total) * 100)}%</p>
          <h4>Scores:</h4>
            <p>Assignments: {scores.assignments * 100}%</p>
            <p>Projects: {scores.projects * 100}%</p>
            <p>Assessments: {scores.assessments * 100}%</p>
          <h4>Certifications:</h4>
            <p>Resume: {certs.resume ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>Linkedin: {certs.linkedin ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>Mock Interview: {certs.mockInterview ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>GitHub: {certs.github ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
        </div>
      )
    }
  }
  

  return (
    <div className="card">
      {/* <img src={student.profilePhoto} alt=''/> */}
      <h6><strong>{student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}</strong></h6>
      <OnTrack
        resume={student.certifications.resume}
        linkedin={student.certifications.linkedin}
        mockInterview={student.certifications.mockInterview}
        codewars={student.codewars.current.total}
      />
      <p>{student.username}</p>
      <p>Birthday: {dateFormatting.format(new Date(student.dob))}</p>
      <br></br>
      <button className='show-more-button' onClick={() => handleShowMore()}>{showMoreText}</button>
      <ShowMore
        codewars={student.codewars}
        scores={student.cohort.scores}
        certs={student.certifications}
      />
      
    </div>
  )
}
