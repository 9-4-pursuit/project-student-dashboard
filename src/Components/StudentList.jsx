import StudentDetails from "./StudentDetails";

function StudentList({ list, listTitle }) {
  return (
    <div className="studentList">
      <div className="studentListText">
        <h2>{listTitle}</h2>
        <p>
          Total Students: <span>{list.length}</span>
        </p>
      </div>

      <div>
        {list.map((item, index) => {
          return (
            <>
              <StudentDetails item={item} key={item.id + index} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
