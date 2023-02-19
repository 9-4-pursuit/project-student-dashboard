

function Cohorts({ cohortArr, filterStudents }) {

    return (
        <div className="cohorts">
            <h3>Choose a Class by Start Date</h3>
            <ul key={cohortArr.id}>
                <li value={"all"} onClick={()=>filterStudents("all")}>All Students</li>
                {
                    cohortArr.map((item) => {
                        return (
                            <li
                                value={item}
                                onClick={() => filterStudents(item)}
                                key={item.id}>
                                {item.substring(0, (item.length - 4)) + " " + item.substring(item.length - 4)}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Cohorts;