
import { useState } from "react"

function StudentList({ studentData, cohorts, cohortObj }) {



    const [showMore, setShowMore] = useState({})
    const [oneForms, setOneForm] = useState({})


    function handleClick(student) {
        setShowMore(showMore => ({
          ...showMore,
          [student.id]: !showMore[student.id],
        }))
      }

      function handleSecondClick(student) {
        setOneForm(oneForms => ({
            ...oneForms,
            [student.username]: !oneForms[student.username],
          }))
      }


    let co = ''
    let cohort = ''
    let total = 0

    function oneForm() {
       
        return (
            <div className="oneForm">
                <h5>1-on-1 Notes</h5>
                <section>
                    <p>Commenter Name:
                    <input></input>
                    </p>
                    <p>Comment
                    <input></input>
                    </p>
                    <br></br>
                    <button>Add Note</button>
                </section>
            </div>
        )
    }
    

    function showMoreDetails(student) {

        if (showMore[student.id]){
           return (
            <div className="detailsBox">
                <h4 className="codewars">CodeWars:</h4>
                <aside className="code">
                    <ul>Current Total: {student.codewars.current.total}</ul>
                    <ul>Last Week: {student.codewars.current.lastWeek}</ul>
                    <ul>Goal: {student.codewars.goal.total}</ul>
                    <ul>Percent of Goal Achieved: {Math.floor(student.codewars.current.total/student.codewars.goal.total*100)}%</ul>
                    </aside>
                <h4 className="scores">Scores</h4>
                <aside className="score">
                    <ul>Assignments: {student.cohort.scores.assignments*100}%</ul>
                    <ul>Projects: {student.cohort.scores.projects*100}%</ul>
                    <ul>Assessments: {student.cohort.scores.assessments*100}%</ul>
                    </aside>
                <h4 className="certs">Certifications</h4>
                <aside className="cert">
                    <ul>Resume: {student.certifications.github ? "✅":"❌"}</ul>
                    <ul>LinkedIn: {student.certifications.linkedin ? "✅":"❌"}</ul>
                    <ul>Mock Interview: {student.certifications.mockInterview ? "✅":"❌"}</ul>
                    <ul>GitHub: {student.certifications.resume ? "✅":"❌"}</ul>
                    </aside>
            </div>
           )
        }

    }

    function track(student) {
        if(student.certifications.github && student.certifications.linkedin && student.certifications.mockInterview && student.certifications.resume && student.codewars.current.total > 600){
            return "On Track to Graduate"
        }
    }

    function whichCohort() {
        for(let i = 0; i < Object.keys(cohortObj).length; i++){
            if(cohorts === Object.keys(cohortObj)[i]){
                cohort = Object.keys(cohortObj)[i]
                total = cohortObj[cohort]
            }
        }
        let season = ''

        if(cohort.includes("Winter") || cohort.includes("Summer") || cohort.includes("Spring")){
            season = cohort.substring(0,6) + " "
            co = season + cohort.substring(6)                   
         }  
             else if (cohort.includes("Fall")){
                 season = cohort.substring(0,4) + " "
                 co = season + cohort.substring(4)                  
          } 
                 else if (cohort.includes("All")){
                     season = cohort.substring(0,3) + " "
                     co = season + cohort.substring(3)                  
          } 
 
    }

    whichCohort()

    let birthArr = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]

    function birthday(student) {
        let month = ''
        let monthStr = ''
        for(let i = 0; i < birthArr.length; i++){
        if(Number(student.dob.charAt(0)) === i){
           monthStr = birthArr[i] + " " + student.dob.substring(2,4) + ", " + student.dob.substring(4)
           month = monthStr.replaceAll("/", "")
        }
    }
    return month
    }

   
    console.log(studentData)
   


    return (
        <div className="StudentList">
            <h3>{co}</h3>
            <p>Total Students: {total}</p>
            {studentData.map((student) => {
                if(student.cohort.cohortCode === cohorts){
                return (
                    <div className="studentCard" key={student.id}>
                        <section className="studentInfo">
                        <img id="image" src={student.profilePhoto} alt="profile"></img>
                        <p className="track">{track(student)}</p>
                        <h3>{student.names.preferredName} {student.names.middleName.charAt()}. {student.names.surname}</h3>
                        <p>{student.username}</p>
                        <p>Birthday: {birthday(student)}</p>
                        </section>
                        <br></br>
                        <button className="studentButton" onClick={() => 
                            handleClick(student)}>{showMore[student.id] ? "Show Less...": "Show More..."}</button>
                        <section>
                        {showMoreDetails(student)}
                        <br></br>
                        <button className="OneOnOneBut" onClick={() => handleSecondClick(student)}>1 on 1</button>
                        {oneForms[student.username] ? oneForm() : null}
                        </section>
                    </div>
                )} else if (co === "All Students"){
                    return (
                        <div className="studentCard" key={student.id}>
                            <section className="studentInfo">
                            <img id="image" src={student.profilePhoto} alt="profile"></img>
                            <p className="track">{track(student)}</p>
                            <h3>{student.names.preferredName} {student.names.middleName.charAt()}. {student.names.surname}</h3>
                            <p>{student.username}</p>
                            <p>Birthday: {birthday(student)}</p>
                            </section>
                            <br></br>
                            <button className="studentButton" onClick={() => handleClick(student)}>{showMore[student.id] ? "Show Less...": "Show More..."}</button>
                            <section>
                            {showMoreDetails(student)}
                            <br></br>
                            <button className="OneOnOneBut" onClick={() => handleSecondClick(student)}>1 on 1</button>
                            {oneForms[student.username] ? oneForm() : null}
                            </section>
                        </div>
                )}
            })}
        </div>
    )
}

export default StudentList