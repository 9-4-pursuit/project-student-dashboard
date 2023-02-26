import OneOnOne from "./OneOnOne"

export default function StudentDetails({ student }) {

    return (
        <>
            <div className="studentDetails" id={student.id}>
                <div><strong>Codewars</strong>
                    <p><span className="green">Current Total: </span>{student.codewars.current.total}</p>
                    <p><span className="green">Last Week: </span>{student.codewars.current.lastWeek}</p>
                    <p><span className="green">Goal: </span>{student.codewars.goal.total}</p>
                    <p><span className="green">Percent of Goal Achieved: </span>{((student.codewars.current.total) / (student.codewars.goal.total) * 100).toFixed(0)} %</p>
                </div>
                <div><strong>Scores</strong>
                    <p><span className="green">Assignments: </span>{(student.cohort.scores.assignments) * 100} %</p>
                    <p><span className="green">Projects: </span>{(student.cohort.scores.projects) * 100} %</p>
                    <p><span className="green">Assessments: </span>{(student.cohort.scores.assessments) * 100} %</p>
                </div>
                <div><strong>Certifications</strong>
                    <p><span className="green">Resume: </span>{student.certifications.resume ? "✅" : "❌"}</p>
                    <p><span className="green">LinkedIn: </span>{student.certifications.linkedin ? "✅" : "❌"}</p>
                    <p><span className="green">Mock Interview: </span>{student.certifications.mockInterview ? "✅" : "❌"}</p>
                    <p><span className="green">GitHub: </span>{student.certifications.github ? "✅" : "❌"}</p>
                </div>
            </div>
            <OneOnOne
                key={student.names.preferred + student.names.surname + "Notes"}
                className="studentNotes"
                student={student}
            />
        </>
    )
}