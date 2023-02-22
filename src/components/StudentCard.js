import StudentDetails from "./StudentDetails"
import StudentNotes from "./StudentNotes"
import { useState } from "react";

export default function StudentCard({ student }) {

  //create state for showing the details
  const [showDetails, setDetails] = useState(false);

  //function to convert birthday to proper format
  function getBirthday(birthDate) {
    //convert the date into a new date object
    const birthDateObj = new Date(birthDate);

    return (birthDateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }

  //function to toggle the showDetails state
  function toggleDetails() {
    setDetails(!showDetails);
  }

  //function to calculate if the student is ontrack to graduate
  function ontrackGraduate() {
    //check if the certifications are all there and if they reached the necessary codewars score
    if (student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.current.total >= 600) {
      return "On Track to Graduate";
    } else {
      return "";
    }

  }

  return (<div
    className="profile">
    {/* display each students basic information*/}
    <img
      src={student.profilePhoto}
      alt={student.names.preferredName}
      className="profile-pic" />

    <section className="profile-info">

      <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
      <p>{student.username}</p>
      <p><span>Birthday:</span> {getBirthday(student.dob)}</p>

      <button
        onClick={toggleDetails}>
        <u>{showDetails ? "Show Less..." : "Show Details..."}</u>
      </button>
    </section>

    {/* call the  */}
    <span className="ontrack">{ontrackGraduate()}</span>

    {showDetails ?
      (<section
        className="more-details">
        <StudentDetails
          student={student} />

        <StudentNotes 
          student={student}/>
      </section>)
      : null
    }

  </div>);
}