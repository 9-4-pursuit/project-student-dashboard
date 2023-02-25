import OneOnOne from "./OneOnOne"

export default function StudentDetails({ student }) {

    return (
        <>
            <div className="studentDetails">
                <div><strong>Codewars</strong>
                    <p>Current Total {student.codewars.current.total}</p>
                    <p>Last Week: {student.codewars.current.lastWeek}</p>
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: {((student.codewars.current.total)/(student.codewars.goal.total)*100).toFixed(0)} %</p>
                </div>
                <div><strong>Scores</strong>
                <p>Assignments: {(student.cohort.scores.assignments)*100} %</p>
                <p>Projects: {(student.cohort.scores.projects)*100} %</p>
                <p>Assessments: {(student.cohort.scores.assessments)*100} %</p>
                </div>
                <div><strong>Certifications</strong>
                <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
                <p>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</p>
                <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
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