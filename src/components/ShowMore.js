import React from "react";
import { useState } from 'react';


function ShowMore({ student }) {
    
    const [comment, setComment ] = useState({
        commenter: "",
        comment: "",
    })
    const [ click, setClick ] = useState(false);
    const [ commenter, setCommenter ] = useState(student.notes);

    function handleChangeComment(e) {
        const elem = {...commenter, [e.target.id]: e.target.value}
        setCommenter(elem);
    }

    function handleSubmission(e) {
        e.preventDefault();
        setCommenter([...commenter, comment])
        setComment({
            commenter: "",
            comment: "",
        })
    }

    let score = (student.codewars.current.total / student.codewars.goal.total) * 100;
    function handleScores(percent) {
        return percent >=100 ? "green" : percent >= 50 ? "yellow" : "red"; 
    }

    function onTrackGrad(student) {
        const onTrack = student.certifications;
        return (
            onTrack.resume && onTrack.mockInterview && onTrack.linkedin && onTrack.github && (student.codewars.current.total > 600)
        )
    }

    function toggleMore(event) {
        setClick(!click)
    }



    return (
        <div className="student-list">
            <span>
            <img src= {student.profilePhoto} alt={student.names.preferredName} style={{width: "100px"}}/>
            </span>
            <ul>
                <li key={student.id}>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</li>
                <li>{student.username}</li>
                <li><font color="#009E60">Birthday:</font> {student.dob}</li>
                {/* <li>{student.cohort.cohortCode}</li> */}
                {onTrackGrad(student) ? <li>On Track to Graduate</li> : null}
                <button onClick={toggleMore}>{click ? "Show Less..." : "Show More..."}</button>
        
                {click ? (
                    <>
                    <h3><strong>Codewars</strong></h3>
                    <li><font color="#009E60">Current Total:</font> {student.codewars.current.total}</li>
                    <li><font color="#009E60">Last Week:</font> {student.codewars.current.lastWeek}</li>
                    <li><font color="#009E60">Goal:</font> {student.codewars.goal.total} </li>
                    <li><font color="#009E60">Percent of Goal Achieved:</font> <span>{handleScores(score.toFixed(0))}%</span></li>
                    
                    <h3><strong>Scores</strong></h3>
                    <li><font color="#009E60">Assignments:</font> {student.cohort.scores.assignments * 100}%</li>
                    <li><font color="#009E60">Projects:</font> {student.cohort.scores.projects * 100}%</li>
                    <li><font color="#009E60">Assessments:</font> {student.cohort.scores.assessments * 100}%</li>

                    <h3><strong>Certifications</strong></h3>
                    <li><font color="#009E60">Resume:</font> {student.certifications.resume ? "✅" : "❌"}</li>
                    <li><font color="#009E60">LinkedIn:</font> {student.certifications.linkedin ? "✅" : "❌"}</li>
                    <li><font color="#009E60">Mock Interview:</font> {student.certifications.mockInterview ? "✅" : "❌"}</li>
                    <li><font color="#009E60">Github:</font> {student.certifications.github ? "✅" : "❌"}</li>
                    
                    <div className="notes">
                    <h3>1-on-1 Notes</h3>
                    <form onSubmit={(e) => handleSubmission(e)}>
                        <label htmlFor="name">Commenter Name</label>
                        <input type="text" name="name" id="commenter" value={comment.commenter} onChange={handleChangeComment} />

                        <label htmlFor="comment">Comment</label>
                        <input type="text" name="name" id="comment" value={comment.comment} onChange={handleChangeComment} />
                        <input type="submit" value={"Add Note"} />
                    </form>

                    {commenter.length > 0 ? (
                    <ul>
                        {commenter.map((comment, i) => {
                        return (
                            <li key={`${comment.comment}-${i}`}> {`${comment.commenter} says, "${comment.comment}"`}</li>
                            )
                    })} 
                    </ul> ) : null }
                    </div>
                    </>
                         
                        ) : null} 
            
            </ul>
        </div>
    )
}



export default ShowMore;