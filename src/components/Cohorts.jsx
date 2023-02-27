import { useState } from "react";
import Students from "./Students";

export default function Cohorts({ data }) {
  const [selectedCohort, setSelectedCohort] = useState(null);

const cohorts = [
    ...new Set(data.map((student) => student.cohort.cohortCode)),
  ].map((cohortCode) => {
    // regular expression that extracts the characters and digits of the cohort
    // and saves them into separate variables so that a space can be added
    // between. The ([A-Za-z]+) is looking for any uppercase / lowercase letters
    // and (\d+) is looking for any digits
    const [season, year] = cohortCode.match(/([A-Za-z]+)(\d+)/).slice(1);
    return {
      cohortCode,
      season,
      year: parseInt(year),
    };
  }).sort((a, b) => {
    // Sort by season first, then by year
    if (a.season < b.season) {
      return -1;
    }
    if (a.season > b.season) {
      return 1;
    }
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return 0;
  });
  

  function handleCohortClick(cohortCode) {
    setSelectedCohort(cohortCode);
  }

  function filterStudentsByCohort(cohortCode) {
    return data.filter((student) => student.cohort.cohortCode === cohortCode);
  }

  function handleShowAllClick() {
    setSelectedCohort(null);
  }

  return (
    <div className="container">
      <div className="cohorts">
        <h2>Choose a Class by Start Date</h2>
        {/* Render the cohort buttons */}
        <button onClick={handleShowAllClick}>
          <h4>All Students</h4>
        </button>
        {cohorts
          .sort((a, b) => {
            // Sort by year first, then by season
            if (a.year !== b.year) {
              return b.year - a.year;
            }
            if (a.season < b.season) {
              return 1;
            }
            if (a.season > b.season) {
              return -1;
            }
            return 0;
          })
          .map((cohort) => (
            <button
              key={cohort.cohortCode}
              onClick={() => handleCohortClick(cohort.cohortCode)}
            >
              <h4>
                {cohort.season} {cohort.year}
              </h4>
            </button>
          ))}
      </div>
      <div className="students">
        <h2>{selectedCohort ? selectedCohort : "All"} Students</h2>
        <p>
          Total Students:{" "}
          <span className="totalStundents">
            {selectedCohort
              ? filterStudentsByCohort(selectedCohort).length
              : data.length}
          </span>
        </p>
        <ul>
        {selectedCohort
  ? filterStudentsByCohort(selectedCohort).map((student) => (
      <Students key={student.id} student={student} />
    ))
  : data.map((student) => (
      <Students key={student.id} student={student} />
    ))}

        </ul>
      </div>
    </div>
  );
}
