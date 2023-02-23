import React, { useState, useEffect } from "react";
import data from "../../data/data.json";

import "./CohortList.css";

const CohortList = ({ filterStudentsByCohort }) => {
  const [cohort, setCohort] = useState([]);

  useEffect(() => {
    function getUniqueCohort(array = []) {
      const Obj = {};
      if (array.length) {
        for (let student of array) {
          const code = student.cohort.cohortCode;
          if (code in Obj) {
            Obj[code]++;
          } else {
            Obj[code] = 1;
          }
        }
        // Sort the cohort codes array by the last 4 digits
        const sortedCohort = Object.keys(Obj).sort((a, b) => {
          const last4DigitsA = a.substring(a.length - 4);
          const last4DigitsB = b.substring(b.length - 4);
          return parseInt(last4DigitsB) - parseInt(last4DigitsA);
        });
        return sortedCohort;
      }
    }
    const sortedCohort = getUniqueCohort(data);
    setCohort(sortedCohort);
  }, []);
  // console.log(cohort);

  return (
    <div className="cohort-list-container">
      <h2>Choose a Class by Start Date</h2>
      <ul className="cohort-list">
        <li
          className="list"
          key="all"
          onClick={() => filterStudentsByCohort("All Students")}
        >
          All Students
        </li>
        {cohort.map((cohort, i) => (
          <li
            className="list"
            key={i}
            onClick={() => filterStudentsByCohort(cohort)}
          >
            {cohort.slice(0, -4) + " " + cohort.slice(-4)}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CohortList;
