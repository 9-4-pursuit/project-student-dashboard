import React from "react";
import { useState } from 'react';
import ShowMore from "./ShowMore";

// cohort = student
function CohortList ({ students, cohort, handleReadable }) {

    return (
        <div className="cohort-list">

            <h2>{ cohort.length === students.length ? "All Students" : handleReadable(cohort[0].cohort.cohortCode)}</h2>
            <h3>Total Students: { cohort.length }</h3>
            {cohort.map(student => {
                return (
                <Student key={`${student.id}`} student={ student } />
                )
            })}
        </div>
    )
}

export default CohortList;