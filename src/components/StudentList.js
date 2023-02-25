import { useState } from "react";
import StudentDetails from "./StudentDetails"

export default function StudentList({ data, students, setStudents, studentTotal, setStudentTotal, cohorts, setCohorts, cohortId, setCohortId, cohortMembers, setCohortMembers }) {

    const [showDetails, setShowDetails] = useState(false);

    // if (cohortId !== "All Students"){
    //    setCohortId(cohortId.slice(0, -4) + " " + cohortId.slice(-4))
    // }    
    function handleShowDetails() {
        setShowDetails(!showDetails);
    }

    function bdayConvert(dob) {
        const birthObj = new Date(dob);
        return (birthObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))
    }

    function graduationTracking(student) {
        let certs = Object.values(student.certifications).every(value => value === true);
        // console.log(certs)
        if (certs === true && student.codewars.current.total >= 600) {
            return ("On Track to Graduate");
        }
    }

    return (
        <div className="studentList">
            <h3>{cohortId}</h3>
            <p>Total Students: {students.length} </p>
            <div className="studentCards">
                {
                    students.map((student) => {
                        return (
                            <section key={student.id} className="card">
                                <img src="https://i.pravatar.cc/100" alt={student.names} />
                                <div className="basicInfo">
                                    <p><strong>
                                        {student.names.preferredName} {student.names.middleName[0]} {student.names.surname}
                                    </strong></p>
                                    <p>{student.username}</p>
                                    <p>Birthday: {bdayConvert(student.dob)}</p>
                                </div>
                                <div className="gradTrack">
                                    {graduationTracking(student)}
                                </div>
                                <div className="showDeets" onClick={handleShowDetails}>
                                    <u>
                                        {showDetails ? "Show Less..." : "Show More..."}
                                    </u></div>
                                {showDetails ? 
                                (<StudentDetails student={student} />) : null}
                            </section>
                        )
                    })
                }
            </div>

        </div>
    )
}