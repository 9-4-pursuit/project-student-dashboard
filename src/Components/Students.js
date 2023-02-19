

function Students({data, studentsData}){
    return(
        <div className="students">
            <h2>All Students</h2>
            <p>Total Students: {studentsData.length}</p>
            <ul>
                {
                    studentsData.map((stu)=>{
                        return(
                        <li key={stu.id}>
                            <img src={stu.profilePhoto} alt={stu.names.preferredName}/>
                            <h4>{stu.names.preferredName} {stu.names.middleName.charAt(0)}. {stu.names.surname}</h4>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Students