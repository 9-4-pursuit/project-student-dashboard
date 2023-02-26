import NavigationBarElement from "./NavigationBarElement";
export default function NavigationBar ({sortedCohortSeasonObjectArray, changeCohort}) {
    return (
        <div className="navigationBar">
            <h3 className="navigationBarTitle">Choose a Class by Start Date</h3>
            <div className="navigationBarElement clickable" onClick={() => changeCohort("AllStudents")}>All Students</div>
            {sortedCohortSeasonObjectArray.map((cohortSeason) => {
                return (
                <NavigationBarElement 
                key={cohortSeason.cohortCode}
                dateText={cohortSeason.dateText} 
                cohortCode={cohortSeason.cohortCode}
                changeCohort={changeCohort}
                />
                ); // return cohortSeason map
            })}
        </div>
    );
}