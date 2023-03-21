import StudentInfo from "./StudentInfo";

export default function Students(props) {

    return (     
    <div className="selected-class-listed">
    <section className="students">
      <h2 onChange={props.updateShowcase}> {props.semester} </h2>
      <p> Student Amount: {props.studentAmount} </p>
      <br />
      {props.data.map((student, index) => {

        let fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;
        let cwCurrentTotal = student.codewars.current.total;
        let cwLastWkTotal = student.codewars.current.lastWeek;
        let cwGoal = student.codewars.goal.total;
        let percentOfGoalAchieved = Math.round((cwCurrentTotal * 100)/cwGoal);
        let percentAssignments = student.cohort.scores.assignments * 100 + "%";
        let percentProjects = student.cohort.scores.projects * 100 + "%";
        let percentAssesments = student.cohort.scores.assessments * 100 + "%";
        let resumeCert = student.certifications.resume;
        let linkedinCert = student.certifications.linkedin;
        let githubCert = student.certifications.github;
        let mockInterviewCert = student.certifications.mockInterview;

          if (props.selectedClass === "All Students" || props.selectedClass === student.cohort.cohortCode) {

            return (
                <div key={student.id}>
                  <StudentInfo fullName={fullName} data={props.data} key={index} student={student} cwCurrentTotal={cwCurrentTotal} cwLastWkTotal={cwLastWkTotal}
                    percentOfGoalAchieved={percentOfGoalAchieved} percentAssignments={percentAssignments} percentProjects={percentProjects}
                    percentAssesments={percentAssesments} resumeCert={resumeCert} linkedinCert={linkedinCert} githubCert={githubCert} mockInterviewCert={mockInterviewCert} />
                </div>
            )
          }
      })}
    </section>             
    </div> 
    )
}