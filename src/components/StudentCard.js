import StudentDetails from "./StudentDetails"
import StudentNotes from "./StudentNotes"
import { useState } from "react";

export default function StudentCard(props) {

  //assign the props to variables
  const student = props.student;

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
        <u>{showDetails ? "Hide Details" : "Show Details..."}</u>
      </button>

      {showDetails ?
        (<div>
          <StudentDetails />
          <StudentNotes />
        </div>)
        : ("")
      }

    </section>
  </div>);
}