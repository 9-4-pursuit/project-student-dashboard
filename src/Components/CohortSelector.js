const CohortSelector = ({ studentData, setCohort, setHeader }) => {
    let CohortArr = [...new Set(studentData.map((x) => x.cohort.cohortCode))];
    let sortedCohortArr = CohortArr.sort();
  
    const handleClick = (e) => {
      const { value } = e.target;
      if (value === "allStudents") {
        setCohort(studentData);
        setHeader("All Students");
      } else {
        let filteredCohort = getCohort(studentData, value);
        setCohort(filteredCohort);
        setHeader(value.split(/([0-9]+)/).join(" "));
      }
    };
    const getCohort = (studentData, value) => {
      return studentData.filter(({ cohort }) => {
        return cohort.cohortCode === value;
      });
    };
  
    return (
      <div className="cohortsPanel">
        <h2 style={{ textDecoration: "underline" }} className="panelTitle">
          Choose A Class By Start Date
        </h2>
        <ul>
          <button
            className="cohortsButtons"
            value="allStudents"
            onClick={handleClick}
          >
            All Students
          </button>
          {sortedCohortArr.map((cohort) => {
            return (
              <li>
                <button
                  className="cohortsButtons"
                  value={cohort}
                  onClick={handleClick}
                >
                  {cohort.split(/([0-9]+)/).join(" ")}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default CohortSelector;