import StudentCard from "./StudentCard";
const StudentList = ({ students, setStudents }) => {
  return (
    <div>
      <h1>All Students</h1>
      {students.map((student) => {
        return (
          <StudentCard
            student={student}
            firstName={student.names.preferredName}
            middleName={student.names.middleName}
            lastName={student.names.surname}
            email={student.username}
            birthDay={student.dob}
            studentPhoto={student.profilePhoto}
            key={student.id}
          />
        );
      })}
    </div>
  );
};

export default StudentList;
