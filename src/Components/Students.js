

function Students({ data, studentsData, settingDob, stuHead, defaultStatus, showMore, form, handleTextChange, handleSubmit, comments }) {
    let more;

    defaultStatus ? more = "Show More" : more = "Show Less"

    return (
        <div className="students">
            <h2>{stuHead}</h2>
            <p>Total Students: <span className="green">{studentsData.length}</span></p>
            <ul id="mainUl">
                {
                    studentsData.map((stu) => {
                        return (
                            <li id="mainLi" key={stu.id}>

                                <img src={stu.profilePhoto} alt={stu.names.preferredName} />

                                <p>
                                    <strong>{stu.names.preferredName} {stu.names.middleName.charAt(0)}. {stu.names.surname}</strong>
                                    <br />
                                    {stu.username}
                                    <br />
                                    <span className="green">Birthday: </span>{settingDob(stu.dob)}
                                </p>
                                <div className="green">
                                    {Object.values(stu.certifications).every(item => item === true) && stu.codewars.current.total > 600 ? "On Track to Graduate" : ""}
                                </div>
                                <a onClick={(e) => showMore(e)} className="green" href="true" value={more}>{more}...</a>


                                <div className="moreBlock" style={defaultStatus ? { display: "none" } : { display: "block" }}>
                                    <p>
                                        <div>
                                            <strong>Codewars:</strong>
                                            <p><span className="green">Current Total:</span> {stu.codewars.current.total}</p>
                                            <p><span className="green">Last Week:</span> {stu.codewars.current.lastWeek}</p>
                                            <p><span className="green">Goal:</span> {stu.codewars.goal.total}</p>
                                            <p><span className="green">Percent of Goal Achieved:</span> {((stu.codewars.current.total / stu.codewars.goal.total) * 100).toFixed(0)}%</p>
                                        </div>
                                        <div>
                                            <strong>Scores</strong>
                                            <p><span className="green">Assignments:</span> {stu.cohort.scores.assignments * 100} %</p>
                                            <p><span className="green">Projects:</span> {stu.cohort.scores.projects * 100} %</p>
                                            <p><span className="green">Assessments:</span> {stu.cohort.scores.assessments * 100} %</p>
                                        </div>
                                        <div>
                                            <strong>certifications</strong>
                                            <p><span className="green">Resume:</span> {stu.certifications.resume ? "✔" : "❌"}</p>
                                            <p><span className="green">Linkedin:</span> {stu.certifications.linkedin ? "✔" : "❌"}</p>
                                            <p><span className="green">Mock Interview:</span> {stu.certifications.mockInterview ? "✔" : "❌"}</p>
                                            <p><span className="green">GitHub:</span> {stu.certifications.github ? "✔" : "❌"}</p>
                                        </div>

                                    </p>
                                    <hr></hr>
                                    <strong>1-on-1 Notes</strong>
                                    <div className="oneBox">
                                        <form>
                                            <label>Commenter Name
                                                <input onChange={(e)=>handleTextChange(e)} type="text" value={form.commenter} id="name"/>
                                            </label>
                                            <br/>
                                            <br/>
                                            <label>Comment
                                                <input onChange={(e)=>handleTextChange(e)} type="text" value={form.comment} id="comment"/>
                                            </label>
                                            <br/>
                                            <br/>
                                            <button onClick={(e)=>handleSubmit(e)}>Add Note</button>
                                        </form>
                                    </div>
                                    <ul className="oneList">
                                        {
                                            comments.map((com)=>{
                                                return(
                                                    <li>{com.commenter} says, "{com.comment}"</li>

                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                                {/* <div className="green" style={defaultStatus ? { display: "none" } : { display: "block" }}>
                                    On Track to Graduate
                                </div> */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Students