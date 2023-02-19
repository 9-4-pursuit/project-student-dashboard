import StudentCard from './StudentCard'

export default function StudentList({ studentList }) {


    return (
        <div className='studentList'>
        <main>
            <h2>All Students</h2>
            <p>Total Students: {studentList.length}</p>
            <ul>
                {
                    studentList.map((student, index) => {
                        return <li><StudentCard student={student} key={index}/></li>
                    })
                }
            </ul>
        </main>
        </div>
    )
}

