import { v1 as generateUniqueID } from "uuid";

function CohortList({ cohortObj, callback }) {

    return (
        <div className="CohortList">
            <h3>Choose a Class by Start Date</h3>
            {Object.keys(cohortObj).map((cohort) => {
                let co = ""
                let season = ''
                let arr = []

                if(cohort.includes("Winter") || cohort.includes("Summer") || cohort.includes("Spring")){
                   season = cohort.substring(0,6) + " "
                   co = season + cohort.substring(6)  
                   arr.push(co)                 
                }  
                    else if (cohort.includes("Fall")){
                        season = cohort.substring(0,4) + " "
                        co = season + cohort.substring(4)       
                        arr.push(co)           
                 } 
                        else if (cohort.includes("All")){
                            season = cohort.substring(0,3) + " "
                            co = season + cohort.substring(3)       
                            arr.push(co)           
                 } 
                return (
                    <div key = {generateUniqueID()} className="cohorts">
                        <button onClick={() => callback(cohort)}>{co}</button>
                    </div>
                )
            })}
        </div>
    )

}

export default CohortList