import { useState, useEffect } from "react";
import Cohorts from "./Components/Cohorts";
import Header from "./Components/Header";
import data from "./data/data.json"

function App() {
  const [cohortArr, setCohortArr] = useState([])

  function cohortsMenu() {
    const copyArr = data.map((item) => {
      item = item.cohort
      item.cohortStartDate = new Date(item.cohortStartDate)
      return item
    }).sort((a, b) => b.cohortStartDate - a.cohortStartDate)
    
    const orgArr = copyArr.map((x) => x = x.cohortCode)
    
    setCohortArr([...new Set(orgArr)])
    
    console.log(orgArr)
  }
  useEffect(()=>{
    console.log('useefffect')
    cohortsMenu()
  },[] )


  return (
    <div>
      <Header />
      <Cohorts cohortArr={cohortArr}/>
      <button>console</button>
    </div>
  );
}

export default App;
