import StudentDetails from "./StudentDetails"

export default function StudentList({ data, students, cohortId, studentTotal }) {

    return (
        <div className="studentList">
            <h3>{cohortId}</h3>
            <p>Total Students: {studentTotal} </p>
            {
                students.map((student) => {
                    <div className="studentCards">
                        <img src="" alt="student picture" />
                        <p>Stu Name</p>
                        <p>Stu email</p>
                        <p>Stu birthday</p>
                    </div>
                })
            }

        </div>
    )
}