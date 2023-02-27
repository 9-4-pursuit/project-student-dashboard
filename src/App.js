import { useState } from 'react';
import './index.css';
import students from './data/data.json';
import Student from "./components/Student";
import CohortList from "./components/CohortList";



function App() {

  const [ cohort, setCohort ] = useState(students);

  function handleSelectCohort(cohortCode) {
    const select = students.filter((student) => {
      return student.cohort.cohortCode === cohortCode;
    });
    setCohort(select);
  }

  function handleReadable(cohortCode) {
    const select = cohortCode.match(/[a-z]+|[^a-z]+/gi)
    return select.join(' ');
  }
  

  return (
  <div className="App">
      <header>Student Dashboard</header>
    
      <Student 
      students={ students } 
      handleSelectCohort={handleSelectCohort}
      handleReadable={handleReadable}
      setCohort={setCohort}
      />
      
      <CohortList 
      students={ students }
      cohort={cohort}
      handleReadable={handleReadable}
      />
</div>

  );
}

export default App;
