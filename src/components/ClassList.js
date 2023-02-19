

export default function ClassList({displayAllStudents}) {
  return (
    <div className="ClassList">
      <aside>
        <h2>Choose a Class by Start Date</h2>
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4>Winter 2026</h4>
        <hr></hr>
        <h4>Fall 2026</h4>
        <hr></hr>
        <h4>Summer 2026</h4>
        <hr></hr>
        <h4>Spring 2026</h4>
        <hr></hr>
        <h4>Winter 2025</h4>
        <hr></hr>
        <h4>Fall 2025</h4>
        <hr></hr>
        <h4>Summer 2025</h4>
        <hr></hr>
        <h4>Spring 2025</h4>
        <hr></hr>
      </aside>
    </div>
  )
}
