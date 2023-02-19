import { useState } from 'react';
import StudentListData from "./data/data";
import TitleBar from "./components/TitleBar";
import NavigationBar from "./components/NavigationBar";
import StudentList from "./components/StudentList";
/*
2023 Feb 19 notes:
useState initial as function to reduce (re-load?) time.
Three components; title bar (sticky), navigation bar (left), students (right)
Two add. components:  details (child of student), 1-on-1 (child of details)
Want to minimize server demands so minimize pseudo-requests for data?  How to do?
Should download one time then write to local, update locally, send updated files back to server.
(For this project, though, no actual server.)
put useState in navigation bar, run once.
*/
function App() {
  const [seasonCohort, setSeasonCohort] = useState("All Students");
  // /*
  // setting initial state of studentList to function should prevent state from having to be set
  // each time (?)
  // */
  // function returnStudentListData() {
  //   return StudentListData;
  // }
  const [studentList, setStudentList] = useState(StudentListData);
  // const [hamster, setHamster] = useState(0);

  // //Filters for unique cohortCode
  let classSeasonRange = StudentListData.map(student => student.cohort.cohortCode).filter((value, index, array) => array.indexOf(value) === index);
  // //test OK 2023 Feb 19 
  // console.log("classSeasonRange", classSeasonRange);

  function cohortCodeSortAndReformat(cohortCodeArray) {
    const seasonOrder = ["Spring", "Summer", "Fall", "Winter"];
    let dateObjectArray = cohortCodeArray.map(code => {
      return {
        dateIndex: code.slice(-4) + seasonOrder.indexOf(code.slice(0, -4)),
        dateText: `${code.slice(0, -4)} ${code.slice(-4)}`,
        cohortCode: code,
      }
    });
    dateObjectArray.sort((a, b) => (parseInt(b.dateIndex) > parseInt(a.dateIndex)) ? 1 : (parseInt(a.dateIndex) > parseInt(b.dateIndex)) ? -1 : 0);
    //return entire object for cohortCode reference, below returns only text element.
    //  return dateObjectArray.map(dateObject => dateObject.dateText);
    return dateObjectArray;
  } // function cohortCodeSortAndReformat
  // //test OK 2023 Feb 19; prints sorted dateObjectArray
  // console.log(cohortCodeSortAndReformat(classSeasonRange));

  const sortedCohortSeasonObjectArray = cohortCodeSortAndReformat(classSeasonRange);
  // console.log(sortedCohortSeasonObjectArray);

  // // go through custom array check "All Students" then each of . . .
  function changeCohort(cohortCode) {
    if (cohortCode === "All Students") {
      setSeasonCohort("All Students");
      setStudentList(StudentListData);
    } else {
      setSeasonCohort(cohortCode);
      setStudentList(StudentListData.filter(student => student.cohort.cohortCode === cohortCode )); // setStudentList filter
    }
    console.log(cohortCode);
  }
  let hamster = 1;
  console.log(hamster);
  hamster++;
// changeCohort={changeCohort}
  return (
    <div>
      <TitleBar />
      <NavigationBar 
      sortedCohortSeasonObjectArray={sortedCohortSeasonObjectArray}
      changeCohort={changeCohort}
       />

      <StudentList />
    </div>
  );
}
export default App;