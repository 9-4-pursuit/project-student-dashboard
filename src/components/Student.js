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
                <li key="cohorts" className="allCohorts"
                onClick={() => setCohort(students)}>
                All Students
                </li>
                    {studentCohort.map((cohortCode) => {
                        return (
                        <li key={students.id} //math.random() --may give errors
                        onClick={() => handleSelectCohort(cohortCode)}>{handleReadable(cohortCode)}
                        </li>
                        )
                    })}
                </div>
            </div>
        )
    }
        
        //functions:
        //setCohort
        //handleSelectCohort
        //handleReadable






    // return (
    //     <div className='student-list'>
    //         { data.map((info) => {
    //         console.log(info)

    //         return <div className='students'>
    //             <h1>All Students</h1>
    //             <p>Total Students: 250</p>

    //             <div className='info'>
    //             <h2>{info.names.preferredName.toUpperCase()}{ info.names.middleName.charAt(0)}{info.names.surname.toUpperCase()}</h2>
    //             <img src = {info.profilePhoto} alt="" className='img'></img>
    //             <h3>Username: {info.username}</h3>
    //             <h3> Birthday: {info.dob}</h3>
    //             <h4> Show More:{}</h4>
    //             </div>
    //         </div>
    //         }) }
    //     </div>
    // )


export default Student;