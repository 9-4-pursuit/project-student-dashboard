
function ShowCohort({ data, setCohortId, setCohortTotal, updateStudentsInfo }) {
  //cohortCode: cohortReadable
  const cohortObject = {};
  data.map(student => {
    const { cohortCode } = student.cohort;
    const cohortReadable = cohortCode.slice(0, -4) + " " + cohortCode.slice(-4);
    if(!Object.keys(cohortObject).includes(cohortReadable)) {
      cohortObject[cohortCode] = cohortReadable;
    }
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
      <div className="cohort">
        <h3>Choose a Class by Start Date</h3>

        <button key="all" onClick={() => {
          updateCohort("all")
          updateStudentsInfo("all")
        }}>
          All Students
        </button>

        {Object.keys(cohortObject).map(classCode => {
          return(
            <button key={classCode} onClick={() => {
              updateCohort(classCode)
              updateStudentsInfo(classCode)
            }}>
              {cohortObject[classCode]}
            </button>
          )
        })}
      </div>
    </>
  );
}

export default ShowCohort;