
export default function StudentCard({ student }) {

    return (
        <div className="card">
            <img src={student.profilePhoto} alt=''/>
            <h6><strong>{student.names.preferredName} {student.names.middleName[0].toUpperCase()}. {student.names.surname}</strong></h6>
            <p>{student.username}</p>
            <p>Birthday: DOB</p>
            <br></br>
        </div>
    )
}
