import { useState } from "react";
import StudentInfo from "./StudentInfo";

export default function Students(props) {

  const [Info, setInfo] = useState(false);

  const [moreOrLess, setMoreorLess] = useState("More");

    return (     
    <div className="selected-class-listed">
    <section className="students">
      <h2 onChange={props.updateShowcase}> {props.semester} </h2>
      <p> Student Amount: {props.studentAmount} </p>
        <br></br>

      {props.data.map((student) => {

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
             //component here
            <div key={student.id} className="info">
              <br></br>
  
                <img src={props.IMAGE} width="100"/>
                <br></br>
            <section className="text-info">

                {resumeCert && linkedinCert && githubCert && mockInterviewCert == true 
                    && cwCurrentTotal > 599 
                    && (<p style={{color: "green"}}> On track to graduate </p>)}
  
                <strong> {fullName} </strong>
                <p> {student.username} </p>
                <p> Date of Birth: {student.dob} </p>
                { Info && <StudentInfo cwCurrentTotal={cwCurrentTotal} cwLastWkTotal={cwLastWkTotal} 
                cwGoal={cwGoal} percentAssesments={percentAssesments} percentProjects={percentProjects}
                percentOfGoalAchieved={percentOfGoalAchieved} percentAssignments={percentAssignments} 
                linkedinCert={linkedinCert} githubCert={githubCert} mockInterviewCert={mockInterviewCert}
                resumeCert={resumeCert} student={student} /> }
                <button onClick={() => setInfo(!Info)}> <span onClick={() => setMoreorLess("Less")}> Show {moreOrLess} Info </span> </button>
            </section>
            </div>
          )
        }
      })}
    </section>             
    </div> 
    )
}