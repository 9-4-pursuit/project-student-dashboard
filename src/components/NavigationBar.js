import NavigationBarElement from "./NavigationBarElement";
export default function NavigationBar ({sortedCohortSeasonObjectArray, changeCohort}) {
    return (
        <div>
            {sortedCohortSeasonObjectArray.map((cohortSeason) => {
                return (
                <NavigationBarElement 
                key={cohortSeason.cohortCode}
                dateText={cohortSeason.dateText} 
                cohortCode={cohortSeason.cohortCode}
                changeCohort={changeCohort}
                // changeCohort={changeCohort}
                />
                ); // return cohortSeason map
            })}
        </div>
    );
}