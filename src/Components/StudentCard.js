import { useState } from "react";

const StudentCard = ({
  names,
  profilePhoto,
  username,
  dob,
  certifications,
  codewars,
  cohort,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showButton, setShowButton] = useState("Show More...");
  const handleClick = () => {
    showMore === false ? setShowMore(true) : setShowMore(false);
    showButton === "Show More..."
      ? setShowButton("Show Less...")
      : setShowButton("Show More...");
  };

  const gradutionTrack = () => {
    if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codewars.current.total > 600
    ) {
      return <p style={{ color: "green" }}>On track to Graduate</p>;
    }
  };

  const Show = () => {
    let percentageColor = "";
    if (
      ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) >= 100
    ) {
      percentageColor = "darkgreen";
    } else if (
      ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) < 50
    ) {
      percentageColor = "darkred";
    } else {
      percentageColor = "gold";
    }

    if (showMore) {
      return (
        <div className="showMore">
          <section className="CodeWars">
            <h3 style={{ textDecoration: "underline" }}>Codewars:</h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p style={{ color: percentageColor }}>
              Percent of Goal Achieved:
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
              %
            </p>
          </section>
          <section className="Scores">
            <h3 style={{ textDecoration: "underline" }}>Scores</h3>
            <p>Assignments: {cohort.scores.assignments * 100}%</p>
            <p>Projects: {cohort.scores.projects * 100}%</p>
            <p>Assessments: {cohort.scores.assessments * 100}%</p>
          </section>
          <section className="Certs">
            <h3 style={{ textDecoration: "underline" }}>Certifications</h3>
            <p>Resume: {certifications.resume ? "😃" : "😞"}</p>
            <p>linkedin: {certifications.linkedin ? "😃" : "😞"}</p>
            <p>Mock Interview: {certifications.mockInterview ? "😃" : "😞"}</p>
            <p>GitHub: {certifications.github ? "😃" : "😞"}</p>
          </section>
        </div>
      );
    }
  };
  return (
    <div className="studentCard">
      <img src={profilePhoto} alt={username} width="150px"></img>
      <h3>
        {names.preferredName} {names.middleName.charAt(0)}. {names.surname}
      </h3>
      <p>{gradutionTrack()}</p>
      <p>{username}</p>
      <p>Birthday: {dob}</p>
      <br></br>
      <button onClick={handleClick}>{showButton}</button>
      <section>{Show()}</section>
      <br></br>
      {/* <section className="1on1">
        <h4>1-on-1 Notes</h4>
      </section> */}
    </div>
  );
};

export default StudentCard;