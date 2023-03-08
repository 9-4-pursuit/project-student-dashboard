import ClassFilter from "./Components/ClassFilter";
import StudentList from "./Components/StudentList";
import data from "./data/data.json";
import { useState } from "react";
import "./index.css";
import Comments from "./Components/Comments";

function App() {
  const [list, setList] = useState(data);
  const [listTitle, setListTitle] = useState("All Students");

  return (
    <div className="AppWrapper">
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>

      <ClassFilter data={data} setList={setList} setListTitle={setListTitle} />

      <StudentList list={list} listTitle={listTitle} />

      <Comments />
    </div>
  );
}

export default App;
