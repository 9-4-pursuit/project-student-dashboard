
import StudentCard from "./StudentCard";

export default function Students({ students, studentCount, classTitle }) {

  return (<div
    className="Students">
    <h2>{classTitle}</h2>
    <p
      className="count">Total Students: <span>{studentCount}</span></p>

    {/* iterate through students */}
    {students.map((student) => {
      return (<StudentCard 
        student={student}
        key={student.id}/>)
    })}

    {/* later implement details and notes section for each person (in the map function) */}

  </div>)
}