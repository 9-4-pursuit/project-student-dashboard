import StudentCard from "./StudentCard";
const StudentList = ({ students, setStudents }) => {
  function formatDate(dateString) {
    const dateParts = dateString.split("/");
    const year = dateParts[2];
    const month = dateParts[0] - 1;
    const day = dateParts[1];
    const dateObj = new Date(year, month, day);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }
  return (
    <div>
      <h1>All Students</h1>
      <p>Total Students: {students.length}</p>
      {students.map((student) => {
        return (
          <StudentCard
            firstName={student.names.preferredName}
            middleName={student.names.middleName}
            lastName={student.names.surname}
            email={student.username}
            birthDay={student.dob}
            studentPhoto={student.profilePhoto}
            key={student.id}
            formatDate={formatDate}
          />
        );
      })}
    </div>
  );
};

export default StudentList;
