
import { useState } from "react";
import StudentDetails from "./StudentDetails";
import OneOnOne from "./OneOnOne";

function StudentsInfo({ student }) {
  const [showMore, setShowMore] = useState(false);

  const { id, names, username, dob, profilePhoto,
    codewars, certifications, cohort, notes } = student;

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function trackGraduation(codewars, certifications) {
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
            <p>{names}</p>
            <p>{username}</p>
            <p><span className="toGreen">Birthday:</span> {dob}</p>
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
              notes={notes}
            />
          </>
        ) : null}
      </div>
    </>
  );

}

export default StudentsInfo;