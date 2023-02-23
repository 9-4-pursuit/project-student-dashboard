
import StudentCard from './StudentCard'


export default function StudentList({ studentList, typeCohort }) {
  
  return (
    <div className='studentList'>
      <main>
        <h2>{typeCohort}</h2>
        <p>Total Students: {studentList.length}</p>
        <ul>
            {
                studentList.map((student) => {
                    return <li key={student.id}> <StudentCard student={student}/></li>
                })
            }
        </ul>
      </main>
    </div>
  )
}
