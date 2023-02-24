import { format, parseISO } from "date-fns"

export default function StudentCard( { student }) {

  const dateFormatting = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  

  return (
    <div className="card">
      {/* <img src={student.profilePhoto} alt=''/> */}
      <h6><strong>{student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}</strong></h6>
      <p>{student.username}</p>
      <p>Birthday: {dateFormatting.format(new Date(student.dob))}</p>
      <br></br>
      {/* <p onClick={showMore}>Show More...</p> */}
    </div>
  )
}
