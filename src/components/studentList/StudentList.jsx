import { useStateContext } from "../../contexts/ContextProvider";
import Student from "../student/Student";
import "./StudentList.css";

export default function StudentList() {
  const { filteredStudents, selectedCohort } = useStateContext();
  // console.log(filteredStudents);
  return (
    <div className="student-list-container">
      <h3>
        {selectedCohort === "All Students"
          ? "All Students"
          : selectedCohort.slice(0, -4) + " " + selectedCohort.slice(-4)}
      </h3>
      <p>
        Total Students:
        <span className="total-students"> {filteredStudents.length}</span>
      </p>
      <ul className="student-list">
        {filteredStudents &&
          filteredStudents.map((student) => (
            <Student student={student} key={student.id} />
          ))}
      </ul>
    </div>
  );
}
