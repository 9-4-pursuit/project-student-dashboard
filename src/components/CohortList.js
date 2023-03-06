
export default function CohortList({ data, students, setStudents, setStudentTotal, cohorts, setCohortId }) {

    // Resets all states when "All Students" is clicked in the cohort list
    function handleAllStuClick() {
        setCohortId("All Students");
        setStudents(data);
        setStudentTotal(data.length);
        // console.log(students, studentTotal, cohortId)
    }
    // Upon CLICK of Cohort,Updates cohortId state, which effects the cohort showing in stu list
    // Filters through original data array looking for students with matching cohort codes to the one clicked
    // Updates Students & StudentsTotal states
    function handleCohortClick(cohort) {
        setCohortId(cohort.slice(0, -4) + " " + cohort.slice(-4));
        const filteredStudents = data.filter((student, index) => {
            return student.cohort.cohortCode === cohort
        })
        setStudents(filteredStudents);
        setStudentTotal(students.length);
        // console.log(cohortMembers, studentTotal)
    }

    return (
        <div className="cohortList">
            <h3>Choose a Class by Start Date</h3>
            <p className="cohorts" onClick={() => handleAllStuClick()}>All Students</p>
            {
                cohorts.map((cohort) => {
                    return (
                        <p
                            key={cohort}
                            className="cohorts"
                            onClick={() => handleCohortClick(cohort)}
                        >{cohort.slice(0, -4) + " " + cohort.slice(-4)}</p>
                    )
                })
            }

        </div>
    )
}