
function ShowCohort({ data, setCohortId, setCohortTotal, updateStudentsInfo }) {
  //cohortReadable: cohortCode
  const cohortObject = { "All Students": "all"};
  data.map(student => {
    const { cohortCode } = student.cohort;
    const cohortReadable = cohortCode.slice(0, -4) + " " + cohortCode.slice(-4);
    if(!Object.keys(cohortObject).includes(cohortReadable)) {
      cohortObject[cohortReadable] = cohortCode;
    }
  })
  //sort the cohort
  const sortedCohort = Object.keys(cohortObject).sort((a, b) => {
    const season = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 }
    const previous = a.split(" ");
    const current = b.split(" ");
    //index 1 is the year and the index 0 is the season
    return current[1] - previous[1] || season[current[0]] - season[previous[0]];
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

      {sortedCohort.map(cohort => {
        return (
          <button key={cohortObject[cohort]} onClick={() => {
            updateCohort(cohortObject[cohort])
            updateStudentsInfo(cohortObject[cohort])
          }}>
            {cohort}
          </button>
        )
      })}
    </>
  );
}

export default ShowCohort;