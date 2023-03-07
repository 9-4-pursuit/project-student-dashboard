import { useState } from "react";

export default function OneOnOne({ student }) {

    // I initially thought of making a STATE for the NOTES, but had the idea to just push the new COMMENT directly back into by student Object.  
    // After tinkering, I will need to useState for this.  
    // The notes are loading upon page render, and new notes are getting added to student.notes array properly, but you have to click to a different cohort and return for the new notes to Re-render.

    const [studentNotes, setStudentNotes] = useState([...student.notes]);

    function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.commentor.value;
        const comment = event.target.comment.value;
        event.target.commentor.value = '';
        event.target.comment.value = '';

        if (!name || !comment) {
            alert("Please enter a valid NAME & COMMENT")
        } else {
            const commentObj = { "commenter": name, "comment": comment }

            student.notes.push(commentObj)
            console.log(commentObj, student.notes)

            setStudentNotes([...student.notes])
        }
    }

    // function notesMap(student){
    //     student.notes.map((note, index) => {
    //         return <li key={index}>{note.commenter} says "{note.comment}"</li>
    //     })
    // }

    return (
        <div
            className="oneOnOne"
            id={student.names.preferredName + student.names.surname + "Notes"}>
            <div className="commentForm">
                <h3>1-On-1 Notes</h3>
                <form onSubmit={event => handleSubmit(event)}>
                    <label htmlFor="Commentor">Commentor Name: </label><br />
                    <input type="Text" id="commentor" placeholder="Name..." /><br />

                    <label htmlFor="comment">Comments: </label><br />
                    <input type="Text" id="comment" placeholder="Comments..." /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="prevNotes">
                {studentNotes.map((note, index) => {
                    return <li key={index}>{note.commenter} says "{note.comment}"</li>
                })}
            </div>

        </div>
    )
}



