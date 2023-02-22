
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

  function graduationTrack(codewars, certifications) {
    const requirement = Object.values(certifications).every(value => value === true);

    if (requirement && codewars.current.total > 600) {
      return(
        <p className="toGreen">On Track to Graduate</p>
      )
    }
  }

  return(
    <>
      <div className="card" key={id}>
        {/* <img src={profilePhoto} width="200px" alt="student profile photo" /> */}
        <p>{names}</p>
        {graduationTrack(codewars, certifications)}
        <p>{username}</p>
        <p><span className="toGreen">Birthday:</span> {dob}</p>
        <button className="toGreen" onClick={() => handleShowMore()}>
          {!showMore ? "Show More..." : "Show Less..."}
        </button>
        {showMore ? (
          <>
            <StudentDetails
              codewars={codewars}
              cohort={cohort}
              certifications={certifications}
            />
            <OneOnOne
              selectedId={id}
              notes={notes}
            />
          </>
        ) : null}
      </div>
    </>
  );

}

export default StudentsInfo;