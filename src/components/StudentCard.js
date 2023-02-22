import React from "react";

export default function StudentCard({ student }) {
  return (
    <div className="StudentCard">
      <img className="img" src={student.profilePhoto} alt="" />
      <h3>
        <strong>
          {student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </strong>
      </h3>
      <p>{student.username}</p>
      <p>Birthday: DOB{}</p>
      <br></br>
      {/* <p onClick={showMore}> Show More...</p> */}
    </div>
  );
}
