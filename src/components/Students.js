

export default function Students({students, studentCount, classTitle}) {

  //function to convert birthday to proper format
  function getBirthday(birthDate) {
    //convert the date into a new date object
    const birthDateObj = new Date(birthDate);

    return (birthDateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }

  return (<div
    className="Students">
    <h2>{classTitle}</h2>
    <p 
    className="count">Total Students: <span>{studentCount}</span></p>

    {/* iterate through students */}
    {students.map((student) => {
      return (<div
        key={student.id}
        className="profile">
        {/* display each students basic information*/}
        <img
          src={student.profilePhoto}
          alt={student.names.preferredName}
          className="profile-pic" />

        <section className="profile-info">

          <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
          <p>{student.username}</p>
          <p><span>Birthday:</span> {getBirthday(student.dob)}</p>

          <button><u>Show More...</u></button>
        </section>


      </div>)
    })}

    {/* later implement details and notes section for each person (in the map function) */}

  </div>)
}