import { useState, useEffect } from "react"

export default function StudentCard( { student }) {

  const [showMore, setShowMore] = useState(false);
  const [showMoreText, setShowMoreText] = useState('Show more...');
  const [notes, setNotes] = useState([]);
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');

  const dateFormatting = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    if(showMore) {
      let currentNote = commenter + ' says, "' + comment + '"';
      setNotes(notes => [...notes, currentNote])
    }
  }, [commenter])

  function OnTrack({ resume, linkedin, mockInterview, codewars }) {
    if (resume === true && linkedin === true && mockInterview === true && codewars > 600) {
      return <p>On Track to Graduate</p>
    }
  }

  function handleShowMore() {
    if(!showMore) {
      setShowMoreText('Show less...')
    } else {
      setShowMoreText('Show more...')
    }
    setShowMore(!showMore);
  }

  function stylePercent(codewars) {
    let styledPercent = Math.round((codewars.current.total / codewars.goal.total) * 100)
    console.log(styledPercent)
    if(styledPercent < 50) {
      return <span style={{color: "red"}}>{styledPercent}%</span>
    } else if(styledPercent >= 50 && styledPercent < 100) {
      return <span style={{color: "yellow"}}>{styledPercent}%</span>
    } else {
      return <span style={{color: "green"}}>{styledPercent}%</span>
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
            <p>Percent of Goal Achieved: {stylePercent(codewars)}</p>
          <h4>Scores:</h4>
            <p>Assignments: {scores.assignments * 100}%</p>
            <p>Projects: {scores.projects * 100}%</p>
            <p>Assessments: {scores.assessments * 100}%</p>
          <h4>Certifications:</h4>
            <p>Resume: {certs.resume ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>Linkedin: {certs.linkedin ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>Mock Interview: {certs.mockInterview ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
            <p>GitHub: {certs.github ? <span>&#x2705;</span> : <span>&#x274C;</span>}</p>
          <hr></hr>

          <h4>1-on-1 Notes</h4>
            
        </div>
      )
    }
  }

  function NotesSection() {
    if (showMore) {
      return (
        <section>
          <form onSubmit={(e) => addNote(e)}>
            <label>Commenter Name </label>
            <input 
                type='text'
                id="commenter" 
            />
            <br></br>
            <br></br>
            <label>Comment </label>
            <input 
                type='text' 
                id="comment"
            />
            <br></br>
            <br></br>
            <button type="submit">Add Note</button>
            <br></br>
            <br></br>
          </form>
          <ul>
            {notes.map((note) => <li>{note}</li>)}
          </ul> 
        </section>
      )
    }
  }

  function addNote(event) {
    event.preventDefault();
    setCommenter(event.target.commenter.value)
    setComment(event.target.comment.value)
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
      <NotesSection />
            
      
      
    </div>
  )
}
