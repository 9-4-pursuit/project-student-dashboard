

export default function Cohorts(props) {

  //assign the props to variables
  const setStudentCount = props.setStudentCount;
  const setStudents = props.setStudents;
  const data = props.data;

  //set student state back to the data;
  function showAllStudents() {
    setStudents(data);
    setStudentCount(data.length);
  }

  //create empty array
  let cohortArr = [];
  //get the cohort array and sort it
  function getCohorts() {

    //iterate through data and push cohorts into the cohort array
    data.map((student) => {
      //check if the code is already in the array
      if (!cohortArr.includes(student.cohort.cohortCode)) {
        cohortArr.push(student.cohort.cohortCode);
      }
    })

    //create an array of the seasons
    const seasons = ["Spring", "Summer", "Fall", "Winter"];

    //sort the array
    cohortArr.sort((a, b) => {
      //compare the year first
      if (a.slice(-4) !== b.slice(-4)) {
        return (b.slice(-4) - a.slice(-4));
        // then the season if necessary
      } else {
        return (seasons.indexOf(b.slice(0, -4)) - seasons.indexOf(a.slice(0, -4)));
      }
    })
    console.log(cohortArr)
  }

  //function to update the students depending on the cohort
  function showCohortStudents( specificCohort) {
    //filter the students that were in a specific cohort and return to a new array
    let studentsInCohort = data.filter((student) => {
      return student.cohort.cohortCode === specificCohort;
    })
    console.log(studentsInCohort)
    //set the state to the new array
    setStudents(studentsInCohort);
    setStudentCount(studentsInCohort.length);
  }
  getCohorts()

  return (<div
    className="Cohorts">
    <h2>Choose a Class by Start Date</h2>

    {/* display each of the cohorts (Season Year) */}
    {/* when clicked change the students state */}
    {/* check using data.filter(student)
    student.cohort.cohortCode (ie Winter2025)*/}
    <ul
      className="cohort-list" >
      <li
        onClick={showAllStudents}>All Students
      </li>

      {/* display each cohort and give it a click event */}
      {cohortArr.map((cohort) => {
        return <li
          key={cohort}
          onClick={() => showCohortStudents(cohort)}>
          {cohort.slice(-4)} {cohort.slice(0, -4)}
        </li>
      })}
    </ul>

  </div>)
}