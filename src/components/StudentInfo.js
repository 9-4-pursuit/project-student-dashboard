import React from "react";
import { useState } from "react";
import image from './xu-haiwei-iE7AmEF-9wk-unsplash copy.jpg';
import Comments from './Comments';

export default function StudentInfo(props) {

    const [moreOrLess, setMoreorLess] = useState("More");

    const [Info, setInfo] = useState(false);

    function moreInfo() {

        function theColor(color) {
            if (props.percentOfGoalAchieved > 99) {
                color = "green";
            }
    
            else if (props.percentOfGoalAchieved > 49 && props.percentOfGoalAchieved < 101) {
                color = "yellow";
            }
    
            else if (props.percentOfGoalAchieved < 50) {
                color = "red"
            }
    
            return color;
        }
    
        return (
            <div className="moreInfo">
            <br />
            <div>
            <strong> Codewars </strong>
            <p> Current Total: {props.cwCurrentTotal} </p>
            <p> Last Week: {props.cwLastWkTotal} </p>
            <p> Goal: {props.cwGoal} </p>
            <p> Percent of Goal Achieved: <span style={{color: theColor()}}> {props.percentOfGoalAchieved}% </span> </p>
            </div>
            <br />
            <div>
            <strong> Scores </strong>
            <p> Assignments: {props.percentAssignments} </p>
            <p> Projects: {props.percentProjects} </p>
            <p> Assessments: {props.percentAssesments} </p>
            </div>
            <br />
            <div>
            <strong> Certifications </strong>
            <p> Resume: {props.resumeCert ? "✔️" : "✖️"} </p>
            <p> Linkedin: {props.linkedinCert ? "✔️" : "✖️"} </p>
            <p> Mock Interview: {props.githubCert ? "✔️" : "✖️"} </p>
            <p> Github: {props.mockInterviewCert ? "✔️" : "✖️"} </p>
            </div>
            <div>
            <Comments data={props.data} student={props.student} />
            </div>
            <br></br>
            </div>
        )
    }

    return ( 
    <section key={props.student.id} className="info">
      <br></br>
        <img src={image} width="100"/>
        <br></br>
    <section className="text-info">
        {props.resumeCert && props.linkedinCert && props.githubCert && props.mockInterviewCert == true 
            && props.cwCurrentTotal > 599 
            && (<p style={{color: "green"}}> On track to graduate </p>)}

        <strong> {props.fullName} </strong>
        <p> {props.student.username} </p>
        <p> Date of Birth: {props.student.dob} </p>
        { Info && moreInfo() }
        <button onClick={() => setInfo(!Info)} > <span onClick={() => setMoreorLess("Less")}> Show {moreOrLess} Info </span> </button>
    </section>
    <br />
    </section>
    )
}

