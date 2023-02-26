import StudentCard from './StudentCard'

export default function StudentList({ studentList, listTitle }) {


    return (
        <div className='studentList'>
        <main>
            <h2>{listTitle}</h2>
            <p>Total Students: {studentList.length}</p>
            <ul className='list'>
                {
                    studentList.map((student) => {
                        return <li><StudentCard student={student} key={student.id} /></li>
                    })
                }
            </ul>
        </main>
        </div>
    )
}

