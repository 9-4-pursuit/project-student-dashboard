import React from "react";
import ShowMore from "./ShowMore";

//this section sorts student list by cohorts code 'winter2025, and start date '12/2/25'
//map thru and adjusts date to humanreadable
//confusion to use key: id or math.random() to render

function Student({ students, setCohort, handleSelectCohort, handleReadable }) {
    const studentCount = {};
        students.forEach(student => {
            studentCount[student.cohort.cohortCode] = student.cohort.cohortStartDate;
        })

    const studentCohort = Object.keys(studentCount);
        studentCohort.sort((a, b) => {
            return new Date(studentCount[a]) - new Date(studentCount[b])
        });
    

        return (
            <div className="StudentList">
                <h3>Choose a Class by Start Date</h3>
                <div>
                <ul>
                <li key="cohorts" className="allCohorts"
                onClick={() => setCohort(students)}>
                All Students
                
                    {studentCohort.map((cohortCode) => {
                        return (
                        <li key={students.id} //math.random() --may give errors
                        onClick={() => handleSelectCohort(cohortCode)}>{handleReadable(cohortCode)}
                        </li>
                        )
                    })}
                    </li></ul>
                </div>
            </div>
        )
    }
        

export default Student;