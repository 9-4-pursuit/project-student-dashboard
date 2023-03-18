import { useState } from "react";
import StudentList from "./Components/StudentList";
const data = require("./data/data.json");

function App() {
  const [students, setStudents] = useState(data);

  return <StudentList students={students} setStudents={setStudents} />;
}

export default App;
