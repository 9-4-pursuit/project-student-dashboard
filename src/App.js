import "./App.css"
import Form from "./Components/Form";
import React, { useState } from "react";
import CohortDate from "./Components/CohortDate";
import CardContainer from "./Components/CardContainer";
import data from "./data/data.json";
console.log(data)

function App() {
  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState("All Students");
  const [comments, setComments] = useState(
    data
      .filter((student) => student.notes.length > 0)
      .map((filteredStudent) => {
        return {
          commenter: filteredStudent.notes[0].commenter,
          text: filteredStudent.notes[0].comment,
        };
      })
  );

  return (
    <div className="app">
      <h1 className="title">Student Dashboard</h1>
      <CohortDate
        data={data}
        setCohort={setCohort}
        cohort={cohort}
        setHeading={setHeading}
      />
      <CardContainer data={cohort} setCohort={setCohort} heading={heading} comments={comments} setComments={setComments}/>
      
    </div>
  );
}

export default App;

