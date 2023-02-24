import { format, parseISO } from "date-fns"

export default function StudentCard( { student }) {

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
      {/* <p onClick={showMore}>Show More...</p> */}
    </div>
  )
}
