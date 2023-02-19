

function Cohorts({cohortArr}){
    
    return(
        <div className="cohorts">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li>All Students</li>
                {
                    cohortArr.map((item)=>{
                        return(
                            <li key={item.id}>{item.substring(0,(item.length - 4))+ " " + item.substring(item.length - 4)}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Cohorts;