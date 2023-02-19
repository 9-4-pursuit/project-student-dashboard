import React, { useState } from 'react'
import Cohort from './components /Cohort'
import Student from './components /Student'
import data from './data/data.json'
function App() {
  const [students, setStudents] = useState(data)
  const [cohort, setCohort] = useState('All Students ')
  let classCohort = ['All Students ']
  data.forEach(el => {
    if (!classCohort.includes(el.cohort.cohortCode)) {
      classCohort.push(el.cohort.cohortCode)
    }
  })
  const yr25 = classCohort.filter(a => a.includes('25'))
  const yr26 = classCohort.filter(a => a.includes('26'))

  const updateStudents = cohort => {
    setCohort(cohort)
    if (cohort === 'All Students') {
      setStudents(data)
    } else {
      const newStudents = data.filter(
        student => student.cohort.cohortCode === cohort.split(' ').join('')
      )
      setStudents(newStudents)
    }
  }
  const sorting = arr => {
    let newar = []
    arr.forEach(ar => {
      if (ar[0] === 'W') {
        newar[0] = ar
      } else if (ar[0] === 'S' && ar[1] === 'p') {
        newar[1] = ar
      } else if (ar[0] === 'S') {
        newar[2] = ar
      } else {
        newar[3] = ar
      }
    })
    return newar
  }

  classCohort = sorting(yr25).concat(sorting(yr26))
  classCohort = classCohort.map(el => {
    const regex = /[0-9]/
    const season = el.slice(0, el.search(regex))
    const year = el.slice(el.search(regex), el.length)
    return `${season} ${year}`
  })
  classCohort.unshift('All Students')
  return (
    <div className='App'>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <div className='cohorts'>
          <h2>Choose a Class by Start Date</h2>
          {classCohort.map(cohort => (
            <Cohort
              key={cohort}
              updateStudents={updateStudents}
              cohort={cohort}
            />
          ))}
        </div>
        <div className='students'>
          <h2>{cohort}</h2>
          <p>
            Total Students: <span className='highlight'>{students.length}</span>
          </p>
          {students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
