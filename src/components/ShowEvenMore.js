export default function ShowEvenMore({ student, showMore }) {

    function checkmarkOrXOutput(checkedThing) {
        if (checkedThing) {
            return "\u2705";
        } else {
            return "\u274C";
        }
    }

    function colorSetByPercentage() {
        const inputPercent = (student.codewars.current.total / student.codewars.goal.total)*100;
        if (inputPercent >= 100) {
            return (
                <span className="green">{inputPercent.toFixed()}%</span>
            );

        } else if (inputPercent >=50 && inputPercent < 100) {
            return (
                <span className="yellow">{inputPercent.toFixed()}%</span>
            );
        } else if (inputPercent < 50) {
            return (
                <span className="red">{inputPercent.toFixed()}%</span>
            );
        }
    }

    if (showMore) {
        // console.log("Show Even More showMore true");
        return (
            <div className="showMoreContainer">
                <div className="showMoreCol1">
                    <h3>Codewars:</h3>
                    <p>Current Total: {student.codewars.current.total}</p>
                    <p>Last Week: {student.codewars.current.lastWeek}</p>
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: {colorSetByPercentage()}</p>
                </div>
                <div className="showMoreCol2">
                    <h3>Scores</h3>
                    <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                    <p>Projects: {student.cohort.scores.projects * 100}%</p>
                    <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                </div>
                <div className="showMoreCol3">
                    <h3>Certifications</h3>
                    <p>{checkmarkOrXOutput(student.certifications.resume)}</p>
                    <p>{checkmarkOrXOutput(student.certifications.linkedin)}</p>
                    <p>{checkmarkOrXOutput(student.certifications.mockInterview)}</p>
                    <p>{checkmarkOrXOutput(student.certifications.github)}</p>
                </div>
            </div>
        );
    } else {
        // console.log("Show Even More showMore false"); 
        return (
            <div className="showMoreContainer"></div>
        );
    }

}