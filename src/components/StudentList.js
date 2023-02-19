import StudentCard from './StudentCard'

export default function StudentList({ studentList }) {



  return (
    <div className='StudentList'>
      <main>
        <h2>All Students</h2>
        {/* map studentList to display each student card */}
        <StudentCard />
      </main>
    </div>
  )
}

