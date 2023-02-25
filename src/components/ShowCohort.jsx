
function ShowCohort({ data, setCohortId, setCohortTotal, updateStudentsInfo }) {
  //cohortReadable: cohortCode
  const cohortObject = {};
  data.map(student => {
    const { cohortCode } = student.cohort;
    const cohortReadable = cohortCode.slice(0, -4) + " " + cohortCode.slice(-4);
    if(!Object.keys(cohortObject).includes(cohortReadable)) {
      cohortObject[cohortReadable] = cohortCode;
    }
  })
  //sort the cohort
  const sortedCohort = Object.keys(cohortObject).sort((a, b) => {
    const months = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 }
    const previous = a.split(" ");
    const current = b.split(" ");
    //index 1 is the year and the index 0 is the season
    return current[1] - previous[1] || months[current[0]] - months[previous[0]];
  })

  function updateCohort(classCode) {
    let total = 0;

    if (classCode === "all") {
      total = data.length;
    } else {
      data.forEach(student => {
        if (classCode === student.cohort.cohortCode) {
          total++;
        }
      });
    }
    setCohortId(classCode);
    setCohortTotal(total);
  }

  return (
    <>
      <h3>Choose a Class by Start Date</h3>

      <button key="all" onClick={() => {
        updateCohort("all")
        updateStudentsInfo("all")
      }}>
        All Students
      </button>

      {sortedCohort.map(cohort => {
        return (
          <button key={cohortObject[cohort]} onClick={() => {
            updateCohort(cohortObject[cohort])
            updateStudentsInfo(cohortObject[cohort])
            // return "style={{color: 'red'}}"
          }}>
            {cohort}
          </button>
        )
      })}
    </>
  );
}

export default ShowCohort;