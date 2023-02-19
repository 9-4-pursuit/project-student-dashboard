
import { useState } from "react";

export default function Students(props) {

  //assign the props to variables
  const students = props.students;

  //create state for the number of students
  const [studentCount, setStudentCount] = useState(students.length)

  return (<div 
    className="Students">
    <h2>All Students</h2>
    <h3>Total Students: {studentCount}</h3>

    {/* display each student from the state students */}
    {/* students.map */}

    {/* later implement details and notes section for each person (in the map function) */}

  </div>)
}