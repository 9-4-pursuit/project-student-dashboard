import StudentCards from './StudentCards'

const StudentList = ({data, title,}) => {
    return (
        <div className='all-students'>
            <h3>{title}</h3>
            <p className='total'>Total Students: <span>{data.length}</span></p>
            <div className='wrap'>
                {data.map(student => 
                <StudentCards key={student.id} data={student}/>)}
            </div>
        </div>
    )
}

export default StudentList