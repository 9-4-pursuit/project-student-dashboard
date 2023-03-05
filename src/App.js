import ClassFilter from './Components/ClassFilter';
import StudentList from './Components/StudentList';
import data from './data/data.json'
import { useState } from 'react';
import "./index.css";

function App() {
const [list, setList] = useState(data)




  return (
    <div className='AppWrapper'>
      <header className='header'>
         <h1>Student Dashboard</h1>
      </header>
     

      <ClassFilter
        data={data}
        setList={setList}
      />


      <StudentList
        list={list}
      />


    </div>
  );
}

export default App;
