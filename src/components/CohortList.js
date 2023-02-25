
export default function CohortList({ data, students, setStudents, studentTotal, setStudentTotal, cohorts, setCohorts, cohortId, setCohortId, cohortMembers, setCohortMembers }) {

    function handleCohortClick(cohort) {
        // Upon CLICK of Cohort,Updates cohortId state, which effects the cohort showing in stu list
        // Filters through original data array looking for students with matching cohort codes to the one clicked
        // Updates 
        setCohortId(cohort.slice(0, -4) + " " + cohort.slice(-4));
        const filteredStudents = data.filter((student, index) => {
            return student.cohort.cohortCode === cohort
        })
        setStudents(filteredStudents);
        setStudentTotal(students.length);
        // console.log(cohortMembers, studentTotal)
    }

    // let stuID = student.cohort.cohortCode.slice(0, -4) + " " + student.cohort.cohortCode.slice(-4);


    return (
        <div className="cohortList">
            <h3>Choose a Class by Start Date</h3>
            <p className="cohorts">All Students</p>
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