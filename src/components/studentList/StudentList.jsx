import Student from "../student/Student";
import "./StudentList.css";

export default function StudentList({ students, selectedCohort }) {
  return (
    <div className="student-list-container">
      <h3>
        {selectedCohort === "All Students"
          ? "All Students"
          : selectedCohort.slice(0, -4) + " " + selectedCohort.slice(-4)}
      </h3>
      <p>
        Total Students:
        <span className="total-students"> {students.length}</span>
      </p>
      <ul className="student-list">
        {students &&
          students.map((student) => (
            <Student student={student} key={student.id} />
          ))}
      </ul>
    </div>
  );
}
