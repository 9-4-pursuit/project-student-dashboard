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
  const [comments, setComments] = useState([])

  // const [more, setMore] = useState("")
  // const [moreArr, setMoreArr] = useState([])

  const [defaultStatus, toggleStatus] = useState(true)

  function handleTextChange(event) {
    event.preventDefault()
if (event.target.id === "name"){
  setForm({...form, commenter: event.target.value})
} else{
  setForm({...form, comment: event.target.value })
}


  }

  function addComment() {

    studentsData.map((stu) => {

      return (

        setComments([form, ...stu.notes, ...comments])

      )

    })

  }

  function resetForm(){
    setForm({
      commenter: "",
      comment: ""
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addComment()
    resetForm()
    console.log(comments)
  }

  function cohortsMenu() {
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

    // console.log(studentsData)
  }

  function settingDob(number) {
    const stringDate = new Date(number)
    const finalString = stringDate.toDateString().slice(4, 15)
    return finalString.substring(0, (finalString.length - 5)) + "," + finalString.substring(finalString.length - 5)
  }

  function showMore(e) {
    e.preventDefault()
    toggleStatus(!defaultStatus)
  }

  useEffect(() => {
    console.log('useefffect')
    cohortsMenu()
    // onTracktoGraduate()
  }, [])


  return (
    <div>
      <Header />
      <button value="1/2/00" onClick={true}>console</button>
      <div className="main">
        <Cohorts cohortArr={cohortArr} filterStudents={filterStudents} />
        <Students
          data={data}
          studentsData={studentsData}
          settingDob={settingDob}
          stuHead={stuHead}
          defaultStatus={defaultStatus}
          showMore={showMore}
          form={form}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          comments={comments}
        // more={more}
        // setMore={setMore}
        />
      </div>
    </div>
  );
}

export default App;
