
import "./App.css";
import Cohorts from "./components/Cohorts";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <Cohorts />
      <Students />
    </div>
  );
}

export default App;
