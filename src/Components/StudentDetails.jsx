import { useState } from "react";
import Notes from "../Components/Notes";

function StudentDetails({ item }) {
  let [moreInfo, setMoreInfo] = useState(false);

  let { github, linkedin, mockInterview, resume } = item.certifications;
  let score = item.codewars.current.total;

  function toggleInfo() {
    setMoreInfo(!moreInfo);
  }

  function bdayFormatter() {
    const dob = item.dob;
    const [month, day, year] = dob.split("/");
    const date = new Date(year, month - 1, day);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const newDob = date.toLocaleDateString("en-US", options);
    return newDob;
  }

  return (
    <div className="studentDetailsCard">
      <img src={item.profilePhoto} alt="ProfilePic" onClick={toggleInfo} />
      <div className="infoWrapper">
        <p>
          <strong>
            {item.names.preferredName}{" "}
            {item.names.middleName.charAt(0).toUpperCase()}.{" "}
            {item.names.surname}
          </strong>
        </p>
        <p>{item.username}</p>
        <p>
          <span>Birthday:</span> {bdayFormatter()}
        </p>
        <a onClick={toggleInfo} className="showMore" href="javascript:;">
          {!moreInfo ? "Show More..." : "Show Less..."}
        </a>
      </div>
      {github && linkedin && mockInterview && resume && score > 600 ? (
        <div className="graduate">
          <p>On Track to Graduate</p>
        </div>
      ) : (
        ""
      )}
      {moreInfo ? <Notes item={item} /> : ""}
    </div>
  );
}

export default StudentDetails;
