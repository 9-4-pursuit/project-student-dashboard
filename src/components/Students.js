
import StudentCard from "./StudentCard";

export default function Students({ students, studentCount, classTitle }) {

  return (<div
    className="Students">
    <h2>{classTitle}</h2>
    <p
      className="count">Total Students: <span>{studentCount}</span></p>
    <div className="student-list">
      {/* iterate through students */}
    {students.map((student) => {
      return (<StudentCard
        student={student}
        key={student.id}
      />)
    })}
    </div>
    

  </div>)
}