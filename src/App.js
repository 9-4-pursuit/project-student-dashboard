import { useEffect } from "react";
import CohortList from "./components/cohortList/CohortList";
import Header from "./components/header/Header";
import StudentList from "./components/studentList/StudentList";
import { useStateContext } from "./contexts/ContextProvider";
import data from "./data/data.json";

function App() {
  const { getUniqueCohort, setCohort } = useStateContext();

  useEffect(() => {
    setCohort(getUniqueCohort(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <CohortList />
        <StudentList />
      </main>
    </div>
  );
}

export default App;
