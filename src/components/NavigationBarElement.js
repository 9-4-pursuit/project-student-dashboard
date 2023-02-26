export default function NavigationBarElement({dateText, changeCohort, cohortCode}) {
    return (
        <div className="navigationBarElement clickable" onClick={() => changeCohort(cohortCode)}>{dateText}</div>
        // <div>{dateText}</div>
    );
}