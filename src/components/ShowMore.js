export default function ShowMore({ showMore, toggleShowMore }) {

    if (showMore) {
        return (
            <div className="clickable" onClick={toggleShowMore}>Show Less</div>
        );
    } else {
        return (
            <div className="clickable" onClick={toggleShowMore}>Show More</div>
        );
    }
}