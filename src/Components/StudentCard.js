import { useState } from "react";
import Comments from "./Comments";

const StudentCard = ({names, profilePhoto, username, dob, certifications, codewars, scores, cohort}) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const baseURL = "https://robohash.org/"
  let uniqueNumber = Math.floor(Math.random() * 10000)
  let profilePhotos = `${baseURL}${uniqueNumber}`

  let percentageColor;
  const percentage = Math.round(
  (codewars.current.total / codewars.goal.total) * 100
);
  if (percentage >= 100) {
  percentageColor = "green";
} else if (percentage >= 50) {
  percentageColor = "yellow";
} else {
  percentageColor = "red";
}

  const isOnTrack = () => {
    if (
      certifications.resume === true &&
      certifications.linkedin === true &&
      certifications.github === true &&
      certifications.mockInterview === true
    ) {
      return <p>On track to Graduate</p>;
    }
  };

  const show = () => {
    if (showMore === true) {
      return (
        <div className="showMore">
          <section>
            <h3>Codewars:</h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p>Percent of Goal Achieved: <span style={{ color: percentageColor }}> {percentage}%</span>
            </p>
          </section>
          <section>
            <h3>Scores</h3>
            <p>Assignments: {(cohort.scores.assignments)*100}%</p>
            <p>Projects: {(cohort.scores.projects)*100}%</p>
            <p>Assessments: {(cohort.scores.assessments)*100}%</p>
          </section>
          <section>
            <h3>Certifications</h3>
            <p>Resume {certifications.resume ? "✅" : "❌"}</p>
            <p>linkedin {certifications.linkedin ? "✅": "❌"}</p>
            <p>Mock Interview {certifications.mockInterview ? "✅" : "❌"}</p>
            <p>GitHub {certifications.github ? "✅" : "❌"}</p>
          </section>
        </div>
      );
    }
  };
  
  return (
    <>
    <div className="studentCard">
      <img className="profile-pic" src={profilePhotos} alt={names.preferredName} width="50px"></img>
      <h3>
        Name: {`${names.preferredName} ${names.middleName[0]}. ${names.surname}`}
      </h3>
      <div className="graduateTrack"><strong>{isOnTrack()}</strong></div>
      <p>Email: {username}</p>
      <p>Birthday: {dob}</p>
      <br />
      <button onClick={handleClick}>Show more...</button>
      <section>{show()}</section>
    </div>
     <div className="comments">
     <Comments />
     </div>
     </>
  );
};

export default StudentCard;
