import StudentCard from "./StudentCard";
import "./StudentList.css"

const StudentList = ({ data, heading }) => {
  // console.log(data)

  return (
    <div id="student-card">
      <h2>{heading}</h2>
      <p>Total Students: {data.length}</p>
      <ul className="student-list">
        {data.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
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
      })}
      </ul>
    </div>
  );
};

export default StudentList;
