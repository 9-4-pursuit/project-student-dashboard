import React from "react";
import { useState } from 'react';
import ShowMore from "./ShowMore";

// cohort = student
function CohortList ({ students, cohort, handleReadable }) {

    return (
        <div className="cohort-list">
            <h2>{ cohort.length === students.length ? "All Students" : handleReadable(cohort[0].cohort.cohortCode)}</h2>
            <h3>Total Students: <em><font color="#009E60">{ cohort.length }</font></em></h3>
            {cohort.map(student => {
                return (
                <ShowMore key={`${student.id}`} student={ student } />
                )
            })}
        </div>
    )
}

export default CohortList;

