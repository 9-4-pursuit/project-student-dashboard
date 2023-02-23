import { useState } from "react";
import StudentDetails from "../studentDetails/StudentDetails";
import avatar from "../../defaultImage/default-avatar.svg";
import "./Student.css";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);
  const isOnTrack =
    Object.values(student.certifications).every((value) => value) &&
    student.codewars.current.total > 600;

  function formattedDob(dob) {
    const date = new Date(dob).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }

  // const img = student?.profilePhoto || avatar;

  return (
    <li className="student">
      <div className="card">
        <div className="profile-pic">
          <img src={avatar} style={{ width: "150px" }} alt="student-pic" />
        </div>
        <div className="info">
          <div className="divider">
            <div className="personal-info">
              <p>
                <strong>
                  {student.names.preferredName + " "}
                  {student.names.middleName + " "}
                  {student.names.surname}
                </strong>
              </p>
              <p>{student.username}</p>
              <p>
                <span className="birthday">Birthday: </span>{" "}
                {formattedDob(student.dob)}
              </p>
              <br />
            </div>
            <div>
              <p style={{ color: "green" }}>
                {isOnTrack ? "On track to graduation" : ""}
              </p>
            </div>

            <p className="show" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less..." : "Show More..."}
            </p>
          </div>
        </div>

        {showMore && (
          <div className="details">
            <StudentDetails student={student} />
          </div>
        )}
      </div>
    </li>
  );
}
