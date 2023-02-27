import React from "react";


function CohortList({allStudents, cohortCheck}) {

    return (
        <div className="article">
            <h3>Choose a Class by Start Date</h3>
            <h4 onClick={allStudents}>All Students</h4>
            
            <h4 onClick={() => cohortCheck('Winter 2026')}>Winter 2026</h4>
            
            <h4 onClick={() => cohortCheck('Fall 2026')}>Fall 2026</h4>
            
            <h4 onClick={() => cohortCheck('Summer 2026')}>Summer 2026</h4>
           
            <h4 onClick={() => cohortCheck('Spring 2026')}>Spring 2026</h4>
            
            <h4 onClick={() => cohortCheck('Winter 2025')}>Winter 2025</h4>
           
            <h4 onClick={() => cohortCheck('Fall 2025')}>Fall 2025</h4>
            
            <h4 onClick={() => cohortCheck('Summer 2025')}>Summer 2025</h4>
            
            <h4 onClick={() => cohortCheck('Spring 2026')}>Spring 2025</h4>

        </div>
    )
}

export default CohortList