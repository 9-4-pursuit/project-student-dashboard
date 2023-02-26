import { useState, createContext, useContext } from "react";
import data from "../data/data.json";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const [students, setStudents] = useState(data);

  const [filteredStudents, setFilteredStudents] = useState(data);

  const [selectedCohort, setSelectedCohort] = useState("All Students");

  const [cohort, setCohort] = useState([]);

  function getUniqueCohort(array = []) {
    // count the number of students in each cohort and assign to their belonging cohorts
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
        // extract the year and season from each string
        const yearA = parseInt(a.slice(-4));
        const yearB = parseInt(b.slice(-4));
        const seasonOrder = { Winter: 0, Fall: 1, Spring: 2, Summer: 3 };
        const seasonA = a.slice(0, -4);
        const seasonB = b.slice(0, -4);
        // compare the years first
        if (yearA !== yearB) {
          return yearB - yearA;
        }
        // if the years are the same, compare the seasons
        return seasonOrder[seasonA] - seasonOrder[seasonB];
      });

      return sortedCohort;
    }
  }

  function filterStudentsByCohort(cohort) {
    let newStudents;
    if (cohort === "All Students") {
      newStudents = students;
    } else {
      newStudents = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
    }
    setSelectedCohort(cohort);
    setFilteredStudents(newStudents);
  }

  return (
    <StateContext.Provider
      value={{
        students,
        setStudents,
        filteredStudents,
        setFilteredStudents,
        selectedCohort,
        setSelectedCohort,
        filterStudentsByCohort,
        getUniqueCohort,
        cohort,
        setCohort,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
