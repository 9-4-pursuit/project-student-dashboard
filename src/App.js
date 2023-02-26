import { useState, useEffect } from "react";
import Cohorts from "./Components/Cohorts";
import Header from "./Components/Header";
import Students from "./Components/Students";
import data from "./data/data.json"

function App() {
  const [cohortArr, setCohortArr] = useState([])
  const [studentsData, setStudentsData] = useState(data)
  const [stuHead, setStuHead] = useState("All Students")
  const [form, setForm] = useState({
    commenter: "",
    comment: ""
  })
  const [defaultStatus, toggleStatus] = useState(false)

  function handleTextChange(event) {
    event.preventDefault()
    if (event.target.id === "name") {
      setForm({ ...form, commenter: event.target.value })
    } else {
      setForm({ ...form, comment: event.target.value })
    }
  }

  function addComment(id) {

    const index = studentsData.findIndex((stu) => id === stu.id)

    studentsData[index].notes = [form, ...studentsData[index].notes]

  }

  function resetForm() {
    setForm({
      commenter: "",
      comment: ""
    })
  }

  function handleSubmit(e, id) {
    e.preventDefault()
    addComment(id)
    resetForm()
  }

  function cohortsMenu() {
    addStudentProperties()
    const copyArr = data.map((item) => {
      item = item.cohort
      item.cohortStartDate = new Date(item.cohortStartDate)
      return item
    }).sort((a, b) => b.cohortStartDate - a.cohortStartDate)

    const orgArr = copyArr.map((x) => x = x.cohortCode)

    setCohortArr([...new Set(orgArr)])
  }

  function filterStudents(value) {
    const studentsArr = [...data]
    const filteredArr = studentsArr.filter((x) => x.cohort.cohortCode === value)

    value === "all" ? setStudentsData(studentsArr) : setStudentsData(filteredArr)
    value === "all" ? setStuHead("All Students") : setStuHead(value.substring(0, (value.length - 4)) + " " + value.substring(value.length - 4))

  }

  function settingDob(number) {
    const stringDate = new Date(number)
    const finalString = stringDate.toDateString().slice(4, 15)
    return finalString.substring(0, (finalString.length - 5)) + "," + finalString.substring(finalString.length - 5)
  }

  function showMore(e, id) {
    e.preventDefault()

    const student = studentsData.findIndex((stu) => id === stu.id)

    studentsData[student].showStatus = !studentsData[student].showStatus

    toggleStatus(studentsData[student].showStatus)

    console.log(student, "space", studentsData)

  }

  function addStudentProperties() {
    studentsData.map((stu) => {
      stu.showStatus = false
      return (
        stu
      )
    })
  }

  useEffect(() => cohortsMenu(), [])


  return (
    <div>
      <Header />
      <div className="main">
        <Cohorts cohortArr={cohortArr} filterStudents={filterStudents} />
        <Students
          studentsData={studentsData}
          settingDob={settingDob}
          stuHead={stuHead}
          defaultStatus={defaultStatus}
          showMore={showMore}
          form={form}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          addStudentProperties={addStudentProperties}
        />
      </div>
    </div>
  );
}

export default App;
