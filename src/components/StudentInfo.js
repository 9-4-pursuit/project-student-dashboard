import React from "react";
//import { useState } from "react";

export default function StudentInfo(props) {

    // const [commenterName, setCommenterName] = useState("");

    // const [comment, setComment] = useState("");

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

    //console.log(event.target.comment.value)
    // function notes() {
    //     let commenterName = 
    // }

    return ( 
        <>
        <strong> Codewars </strong>
        <p> Current Total: {props.cwCurrentTotal} </p>
        <p> Last Week: {props.cwLastWkTotal} </p>
        <p> Goal: {props.cwGoal} </p>
        <p> Percent of Goal Achieved: <span style={{color: theColor()}}> {props.percentOfGoalAchieved}% </span> </p>

        <strong> Scores </strong>
        <p> Assignments: {props.percentAssignments} </p>
        <p> Projects: {props.percentProjects} </p>
        <p> Assessments: {props.percentAssesments} </p>

        <strong> Certifications </strong>
        <p> Resume: {props.resumeCert ? "✔️" : "✖️"} </p>
        <p> Linkedin: {props.linkedinCert ? "✔️" : "✖️"} </p>
        <p> Mock Interview: {props.githubCert ? "✔️" : "✖️"} </p>
        <p> Github: {props.mockInterviewCert ? "✔️" : "✖️"} </p>

        <section>
            <strong> 1-on-1 Notes </strong>
            <form>
                <label> Commenter Name:  </label>
                <input type="text" name="name" />
                <br></br>
                <label> The Comment:  </label>
                <input type="text" name="comment" />
                <br></br>
                <button type="submit"> Add Comment </button>
            </form>
            <br></br>
            <p>  </p>
        </section>
        <br></br>
        </> 
    )
}

//onkeyUp
//perhaps that onkeyup part is extremelly unnecessary