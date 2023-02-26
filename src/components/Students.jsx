import Student from "./Student";
import { useState } from "react";

export default function Students({ student }) {
  const [selectedStudents, setSelectedStudents] = useState({});

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function formattedDOB(dob) {
    const DOB_split = dob.split("/");
    const month = monthsArray[DOB_split[0] - 1];
    return month + " " + DOB_split[1] + ", " + DOB_split[2];
  }

  function handleStudentClick(studentId) {
    setSelectedStudents((prevSelectedStudents) => ({
      ...prevSelectedStudents,
      [studentId]: !prevSelectedStudents[studentId],
    }));
  }

  return (
    <>
      <li key={student.id}>
        <div className="student">
          <img src={student.profilePhoto} alt="Student Profile" />
          <div className="graduateStatus">
            <p>
              {student.codewars.current.total > 600 &&
              student.certifications.resume === true &&
              student.certifications.linkedin === true &&
              student.certifications.mockInterview === true &&
              student.certifications.github === true
                ? "On Track to Graduate"
                : "Not On Track to Graduate"}
            </p>
          </div>
          <h3>
            {student.names.preferredName} {student.names.middleName.charAt(0)}.{" "}
            {student.names.surname}
          </h3>
          <p>{student.username}</p>
          <p className="birthday">{formattedDOB(student.dob)}</p>
          <button
            value={student.id}
            onClick={() => handleStudentClick(student.id)}
          >
            {selectedStudents[student.id] ? "Show Less..." : "Show More..."}
          </button>
          {selectedStudents[student.id] && <Student student={student} />}
        </div>
      </li>
    </>
  );
}
