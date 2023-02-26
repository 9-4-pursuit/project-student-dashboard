import { useState } from "react";

export default function OneOnOne({ student }) {

    // I initially thought of making a STATE for the NOTES, but had the idea to just push the new COMMENT directly back into by student Object
    // const [studentNotes, setStudentNotes] = useState(student.notes);

    function handleSubmit(event) {
        // console.log(student.notes);
        event.preventDefault();

        const name = event.target.commentor.value;
        const comment = event.target.comment.value;
        event.target.commentor.value = '';
        event.target.comment.value = '';

        const commentObj = { "commenter": name, "comment": comment }

        student.notes.push(commentObj)
        console.log(commentObj, student.notes)

    }

    return (
        <div
            className="oneOnOne"
            id={student.names.preferredName + student.names.surname + "Notes"}>
            <div className="commentForm">
                <h3>One-On-One Notes</h3>
                <form onSubmit={event => handleSubmit(event)}>
                    <label htmlFor="Commentor">Commentor Name: </label><br />
                    <input type="Text" id="commentor" placeholder="Name..." /><br />

                    <label htmlFor="comment">Comments: </label><br />
                    <input type="Text" id="comment" placeholder="Comments..." /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="prevNotes">
                {student.notes.map((note, index) => {
                    return <li key={index}>{note.commenter} says "{note.comment}"</li>
                })}
            </div>

        </div>
    )
}



