function ClassFilter({ data, setList }) {
  let buttonList = [];

  data.forEach((item) => {
    if (!buttonList.includes(item.cohort.cohortCode)) {
      buttonList.push(item.cohort.cohortCode);
    }
  });

 buttonList.sort()
 

console.log(buttonList)




  function updateList(event) {
    if (event.target.id === "AllStudents") {
      setList(data);
    } else {
      setList(() =>
        data.filter((item) => item.cohort.cohortCode === event.target.id)
      );
    }
  }

  return (
    <div className="filterOptions">
      <h2 style={{textAlign : "center"}}>Choose a Class by Start Date</h2>
      <div className="filterListWrapper">
        <h4
          id="AllStudents"
          className="filterListItem"
          onClick={(event) => updateList(event)}
        >
          All Students
        </h4>
        {buttonList.sort().map((item) => {
          return (
            <h4 id={item} className="filterListItem" onClick={(event) => updateList(event)}>
              {`${item.slice(0, item.length - 4)} ${item.slice(
                item.length - 4
              )}`}
            </h4>
          );
        })}
      </div>
    </div>
  );
}

export default ClassFilter;
