export default function Cohort({cohort, updateStudents}){
    
    return (
        <button className="cohort" onClick={()=>updateStudents(cohort)}>
            <h3>{cohort}</h3>
        </button>
    )
}