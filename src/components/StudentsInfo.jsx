
import { useState, } from "react";
import StudentDetails from "./StudentDetails";
import OneOnOne from "./OneOnOne";

function StudentsInfo({ student }) {
  const [showMore, setShowMore] = useState(false);
  const { id, names, username, dob, profilePhoto, codewars, certifications, cohort, notes } = student;
  const fullName = names.preferredName + " " + names.middleName.charAt(0) + ". " + names.surname;
  const birthDay = new Date(dob).toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric"});

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function trackGraduation(codewars, certifications) {
    //return if all the certifications are true
    const requirement = Object.values(certifications).every(value => value === true);

    if (requirement && codewars.current.total > 600) {
      return(
        <p className="toGreen">On Track to Graduate</p>
      )
    }
  }

  return(
    <>
      <div className="card">
        <div className="info">
          {/* <img src={profilePhoto} width="200px" alt="student profile photo" /> */}
          <img src={require("../assests/blank-profile-photo.jpg")} alt="blank profile photo" />
          <div className="basicInfo">
            <p>{fullName}</p>
            <p>{username}</p>
            <p><span className="toGreen">Birthday:</span> {birthDay}</p>
          </div>
          <span className="trackGraduation">
            {trackGraduation(codewars, certifications)}
          </span>
          <button className="toGreen" onClick={() => handleShowMore()}>
            {!showMore ? "Show More..." : "Show Less..."}
          </button>
        </div>

        {showMore ? (
          <>
            <StudentDetails
              codewars={codewars}
              cohort={cohort}
              certifications={certifications}
            />
            <OneOnOne
              id={id}
              notes={notes}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default StudentsInfo;