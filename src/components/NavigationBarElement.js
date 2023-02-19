export default function NavigationBarElement({dateText, changeCohort, cohortCode}) {
    return (
        <div onClick={() => changeCohort(cohortCode)}>{dateText}</div>
        // <div>{dateText}</div>
    );
}