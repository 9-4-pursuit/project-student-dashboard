export default function ShowNotes({ showNotes, toggleShowNotes }) {

    if (showNotes) {
        return (
            <div className="clickable" onClick={toggleShowNotes}>Hide Notes</div>
        );
    } else {
        return (
            <div className="clickable" onClick={toggleShowNotes}>Show Notes</div>
        );
    }
}