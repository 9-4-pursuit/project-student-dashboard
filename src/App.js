import { useState } from 'react';
import  data  from './data/data.json';
import StudentCard from './components/StudentCard';
import CohortList from './components/CohortList';

function App() {

const [students, setStudents] = useState(data)
console.log(students.length)

const [cohortSeason, setCohortSeason] = useState('All Students');

function cohortCheck(code) {
  console.log(code);
  setStudents(data.filter(student => student.cohort.cohortCode === code.split(' ').join('')));
  setCohortSeason(code)
}

function allStudents(){
  setStudents(data);
  setCohortSeason('All Students')
}

  return (
    <div className='app'>
      <h1>Student Dashboard</h1>
      <StudentCard students={students} season={cohortSeason}/>
      <CohortList cohortCheck={cohortCheck} allStudents={allStudents}/>
      
    </div>
  );
}

export default App;
