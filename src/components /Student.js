import React from 'react'
function Student({ student }) {
  const [show, setShow] = React.useState(false)
  return (
    <div className='student-card'>
      <div className='student-main'>
        <img src={student.profilePhoto} alt='profile' />
        <aside>
          <p>
            <b>
              {student.names.preferredName} {student.names.middleName[0]}{' '}
              {student.names.surname}
            </b>
          </p>
          <p>{student.username}</p>
          <p>
            <span className='highlight'>Birthday:</span> {student.dob}
          </p>
          <button onClick={() => setShow(!show)}>
            Show {show ? 'less' : 'more'}...
          </button>
        </aside>
      </div>
      {show ? (
        <div className='more-details'>
          <section className='codewars'>
            <h3>Codewars</h3>
            <p>
              <span className='highlight'>Current Total:</span>
              {student.codewars.current.total}
            </p>
            <p>
              <span className='highlight'>Last Week:</span>
              {student.codewars.current.lastWeek}
            </p>
            <p>
              <span className='highlight'>Goal:</span>
              {student.codewars.goal.total}
            </p>
            <p>
              <span className='highlight'>Percent of Goal Achieved:</span>
              {parseInt(
                (student.codewars.current.total / student.codewars.goal.total) *
                  100
              )}
              %
            </p>
          </section>
          <section className='scores'>
            <h3>Scores</h3>
            <p>
              <span className='highlight'>Assignments:</span>
              {student.cohort.scores.assignments * 100}%
            </p>
            <p>
              <span className='highlight'>Projects:</span>
              {student.cohort.scores.projects * 100}%
            </p>
            <p>
              <span className='highlight'>Assessments:</span>
              {student.cohort.scores.assessments * 100}%
            </p>
          </section>
          <section className='certs'>
            <h3>Certifications</h3>
            <p>
              <span className='highlight'>Resume:</span>
              {student.certifications.resume ? '✅' : '❌'}
            </p>
            <p>
              <span className='highlight'>LinkedIn:</span>
              {student.certifications.linkedin ? '✅' : '❌'}
            </p>
            <p>
              <span className='highlight'>Mock Interview:</span>
              {student.certifications.mockInterview ? '✅' : '❌'}
            </p>
            <p>
              <span className='highlight'>GitHub:</span>
              {student.certifications.github ? '✅' : '❌'}
            </p>
          </section>
        </div>
      ) : null}
    </div>
  )
}
export default Student
