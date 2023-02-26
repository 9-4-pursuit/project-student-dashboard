
import StudentCard from './StudentCard'

export default function StudentList({studentList, createCohort }) {
  return (
    <div className='studentlist'>

        <main>
            <h2>{createCohort}</h2>
            <p>Total Students: {studentList.length}</p>
            <ul>
                {
                    studentList.map((student) => {
                        return <li key={student.id}> <StudentCard student={student}/> </li>
                        
                    })
                }
            </ul>
        </main>
      
    </div>
  )
}
