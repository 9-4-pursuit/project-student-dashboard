

export default function Cohorts(props) {

  //assign the props to variables
  const students = props.students;
  const setStudents = props.setStudents;
  const data = props.data;

  return (<div
    className="Cohorts">
    <h2>Choose a Class by Start Date</h2>

    {/* display each of the cohorts (Season Year) */}
    {/* when clicked change the students state */}
    {/* check using data.map(student)
    student.cohort.cohortCode (ie Winter2025)*/}

  </div>)
}