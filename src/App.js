import { useState } from 'react'
import StudentList from './Components/StudentList'
import CohortList from './Components/CohortList'
import data from './data/data.json'


const App = () => {
  const [list, setList] = useState(data)
  const [title, setTitle] = useState('All Students')

  return (
    <div className='App'>
      <div className='title'>
      <h1>Student Dashboard</h1>
    </div>
    <StudentList data={list} title={title} />
    <CohortList data={data} setList={setList} setTitle={setTitle} />
    </div>
  );
}

export default App;
