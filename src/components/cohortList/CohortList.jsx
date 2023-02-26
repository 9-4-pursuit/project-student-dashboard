import { useStateContext } from "../../contexts/ContextProvider";
import "./CohortList.css";

const CohortList = () => {
  const { filterStudentsByCohort, cohort } = useStateContext();

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

        {cohort.map((cohort, i) => {
          const formattedCohortName = `${cohort.substring(
            0,
            cohort.length - 4
          )} ${cohort.substring(cohort.length - 4)}`;
          return (
            <li
              className="list"
              key={i}
              onClick={() => filterStudentsByCohort(cohort)}
            >
              {formattedCohortName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CohortList;
