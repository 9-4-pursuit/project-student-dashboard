import React from "react";
import Students from "./components/Students";
import Cohorts from "./components/Cohorts";
import data from "./data/data.json";
import "./styles.css";

function App() {
  return (
    <>
    <div className="header">Student Dashboard</div>
    <div>
      <Cohorts data={data} />
    </div>
    </>
  );
}

export default App;
