import { useState } from 'react';
import React from 'react';
import './index.css';
import students from './data/data.json';
import Student from "./components/Student";
import ShowMore from "./components/ShowMore";
import CohortList from "./components/CohortList";



function App() {

  const [ student, setStudent ] = useState(students);

  function handleSelectCohort(cohortCode) {
    const select = students.filter((student) => {
      return student.cohort.cohortCode === cohortCode;
    });
    setStudent(select);
  }

  function handleReadable(cohortCode) {
    const newStr = cohortCode.match(/[a-z]+|[^a-z]+/gi)
    console.log(newStr.join(' '));
  }
  

  return (
    <div>
      <header>
      <h2>Student Dashboard</h2>
      </header>

      <CohortList students={ students } />

      <Student students={ students } 
      handleSelectCohort={handleSelectCohort}
      handleReadable={handleReadable}
      setCohort={setCohort}
      />

      <ShowMore />
      
    </div>
  );
}

export default App;
