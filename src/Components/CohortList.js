import StudentCard from "./StudentCard";

const CohortList = ({ cohorts, header }) => {
  return (
    <ul className="students">
      <h2>{header}</h2>

      <p>Total Students: {cohorts.length}</p>
      {cohorts.map(
        ({
          names,
          profilePhoto,
          id,
          username,
          dob,
          certifications,
          codewars,
          cohort,
        }) => {
          return (
            <li key={id}>
              <StudentCard
                names={names}
                profilePhoto={profilePhoto}
                username={username}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                cohort={cohort}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CohortList;