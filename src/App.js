import { useState, useEffect } from "react";
import Cohorts from "./Components/Cohorts";
import Header from "./Components/Header";
import Students from "./Components/Students";
import data from "./data/data.json"

function App() {
  const [cohortArr, setCohortArr] = useState([])
  const [studentsData, setStudentsData] = useState(data)

  function cohortsMenu() {
    const copyArr = data.map((item) => {
      item = item.cohort
      item.cohortStartDate = new Date(item.cohortStartDate)
      return item
    }).sort((a, b) => b.cohortStartDate - a.cohortStartDate)
    
    const orgArr = copyArr.map((x) => x = x.cohortCode)
    
    setCohortArr([...new Set(orgArr)])
  }

  function filterStudents(value){
    const studentsArr = [...data]
    const filteredArr = studentsArr.filter((x)=>x.cohort.cohortCode == value)

    value == "all" ? setStudentsData(studentsArr) :  setStudentsData(filteredArr)

    console.log(studentsData)
  }

  useEffect(()=>{
    console.log('useefffect')
    cohortsMenu()
  },[] )


  return (
    <div>
      <Header />
      <div className="main">
      <Cohorts cohortArr={cohortArr} filterStudents={filterStudents}/>
      <Students data={data} studentsData={studentsData}/>
      </div>
      <button value="i am value" onClick={filterStudents}>console</button>
    </div>
  );
}

export default App;
