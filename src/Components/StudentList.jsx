import StudentDetails from "./StudentDetails";

function StudentList({ list }) {
  // function dateFunc (item) {
  //     console.log(item)

  // }

  return (
    <div className="studentList">
      <div className="studentListText">
        <h2>All Students</h2>
        <p>Total Students: {list.length}</p>
      </div>

      <div>
        {list.map((item, index) => {
          return (
            <>
              <StudentDetails item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
