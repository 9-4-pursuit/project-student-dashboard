import React from "react";
import Cohort from "./Notes";
const CohortDate = ({ data, setCohort, setHeading }) => {

  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

  const year = (year) => {
    return year.split("").slice(0,-4).join("") +" "+ year.slice(1).slice(-4)
  }

  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setCohort(data);
      setHeading("All Students")
    } else {
      let filteredCohort = getCohort(data, value);
      setCohort(filteredCohort);
      setHeading(year(value))
    }
  };

  const getCohort = (data, semester) => {
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === semester;
    });
  };


  return (
    <div className="">
      <h2>Choose a class by Start Date</h2>
      <ul>
        <button value="all" onClick={handleClick}>
          All Students
        </button>
        {newList.map((cohort) => {
          return (
            <div>
              <button value={cohort} onClick={handleClick}>
                {year(cohort)}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortDate;
