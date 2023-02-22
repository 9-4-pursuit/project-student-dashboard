import { useState } from "react";

function OneOnOne({ selectedId, notes }) {
  // const [theCommenter, setTheCommenter] = useState(null);
  // const [theComment, setTheComment] = useState(null);
  const [theNotes, setTheNotes] = useState(notes);

  // function handleCommenterChange(event) {
  //   setTheCommenter(event.target.value);
  // }
  // function handleCommentChange(event) {
  //   setTheComment(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const theCommenter = event.target.commenter.value;
    const theComment = event.target.comment.value;
    addComment(event, theCommenter, theComment);
    showComment();
  }
  
  function addComment(event, theCommenter, theComment) {
    const newComment = {commenter: theCommenter, comment: theComment};
    setTheNotes(() => [...theNotes, newComment]);
    event.target.commenter.value = "";
    event.target.comment.value = "";
  }

  function showComment() {
    return(
      <>
        { (theNotes.length > 0)
        ? theNotes.map((note, index) => {
          return (
            <div key={index}>
              <p>{note.commenter} says, "{note.comment}"</p>
            </div>
            )
          })
        : null
        }
      </>
    )
  }
  
  return (
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <div className="notesSubmit">
        <form onSubmit={event => handleSubmit(event)}>
          <label htmlFor="commenter">Commenter Name </label>
          <input type="text" id="commenter" name="commenter" required
            // value={theCommenter}
            // onChange={handleCommenterChange}
          />
          <br />
          <label htmlFor="comment">Comment </label>
          <input type="text" id="comment" name="comment" required
            // value={theComment}
            // onChange={handleCommentChange}
          />
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