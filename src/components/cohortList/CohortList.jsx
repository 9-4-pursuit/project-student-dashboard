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
