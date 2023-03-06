import { useState } from "react";

function OneOnOne({ id, notes }) {
  const [theNotes, setTheNotes] = useState(notes);

  function handleSubmit(event) {
    event.preventDefault();
    addComment(event);
    showComment();
  }
  
  function addComment(event) {
    const theCommenter = event.target.commenter.value;
    const theComment = event.target.comment.value;
    const newComment = {commenter: theCommenter, comment: theComment};
    event.target.commenter.value = "";
    event.target.comment.value = "";
    notes.push(newComment);
    setTheNotes(() => [...theNotes]);
  }

  function showComment() {
    return(
      <>
        <ul>
          { (theNotes.length > 0)
          ? theNotes.map((note) => {
            return (
              <div key={id}>
                <li>{note.commenter} says, "{note.comment}"</li>
              </div>
              )
            })
          : null
          }
        </ul>
      </>
    )
  }
  
  return (
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <div className="notesSubmit">
        <form onSubmit={event => handleSubmit(event)}>
          
          <label htmlFor="commenter">Commenter Name </label>
          <input type="text" id="commenter" name="commenter" required />
          <br />
          <br />

          <label htmlFor="comment">Comment </label>
          <input type="text" id="comment" name="comment" required />
          <br />
          <br />

          <input type="submit" />

        </form>
      </div>
      <div className="notesShow">
        {showComment()}
      </div>
    </div>
  );
}

export default OneOnOne;