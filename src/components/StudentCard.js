import React from "react";
import { useState } from "react";

function StudentCard({students, season}) {
    //  console.log(students)

     const [more, setMore] = useState(false);

     const [commentUL, setCommentUL] = useState([]);

     function showComments(event){
        event.preventDefault()
        let comment = event.target.name.value
        console.log(comment)
        let commenter = document.getElementById('commenter-name').value
        console.log(commenter)
        let officialComment = `${commenter} says, '${comment}'`
        setCommentUL([...commentUL, officialComment])
        event.target.reset()
     }

     function trackStar(students){
        return(    
            students.certifications.resume === true &&
            students.certifications.linkedin === true &&
            students.certifications.mockInterview === true &&
            students.certifications.github === true && students.codewars.current.total > 600
            )
     }


    return (
        // console.log({students})
        <div className="main">
            <h3>{season}</h3>
            <p>Total Students: <span className="total-students">{students.length}</span></p>
            <div className="studentCard">
                {students.map((student, key) => {
                        function showingMore(){
                            setMore(!more)
                            console.log('clicked')
                        }
                    return (
                        <div className="card" key={key}>
                            <img src="https://m.media-amazon.com/images/I/41UPhvnAR1L.jpg" height='200px' alt='profile-photo' />
                            <br />
                            <strong>{student.names.preferredName + ' ' + student.names.middleName.charAt(0) + '.' + ' ' + student.names.surname }</strong>
                            <br/>
                            {trackStar(student) ? <p className="track">On Track to Graduate!</p> : null}
                            {student.username}
                            <br />
                            <span className="dob">Birthday:</span> {new Date(student.dob).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            <br />
                            <p className="show" onClick={() => showingMore()}>{more ? 'Show Less...' : 'Show More...'}</p>
                            {more ? (
                                <div className="student-details">
                                    <div className="codewars">
                                        <h3>Codewars:</h3>
                                        <p>Current Total: {student.codewars.current.total}</p>
                                        <p>Last Week: {student.codewars.current.lastWeek}</p>
                                        <p>Goal: {student.codewars.goal.total}</p>
                                        <p>Percent of Goal Achieved: {(student.codewars.current.total /student.codewars.goal.total).toFixed(2) * 100 }%</p>
                                    </div>

                                    <div className="Scores">
                                        <h3>Scores:</h3>
                                        <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                                        <p>Projects: {student.cohort.scores.projects * 100}%</p>
                                        <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                                    </div>

                                    <div className="certifications">
                                        <h3>Certifications</h3>
                                        <p>Resume: {student.certifications.resume ? "✔️" : "✖️"}</p>
                                        <p>LinkedIn: {student.certifications.linkedin ? "✔️" : "✖️"}</p>
                                        <p>Mock Interview: {student.certifications.mockInterview ? "✔️" : "✖️"} </p>
                                        <p>Github: {student.certifications.github ? "✔️" : "✖️"} </p>
                                    </div>

                                    <hr></hr>

                                    <section className="comments">
                                        <h3>1-on-1 Notes</h3>
                                        <form onSubmit={showComments}>
                                            <label htmlFor="commenter-name"> Commenter Name </label>
                                            <input type='text' id="commenter-name"/>
                                            <br/>
                                            <label htmlFor="comment">Comment </label>
                                            <input type='text' id="comment" name='name'/>
                                            <br />
                                            <button type="submit">Add Note</button>
                                        </form>
                                        <div className="display-comments">
                                            <ul>
                                                {commentUL.map((element, index) => {
                                                    console.log(element);
                                                    return <li key={index}>{element}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </section>

                                </div>
   
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StudentCard