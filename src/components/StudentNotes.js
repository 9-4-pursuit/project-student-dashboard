
export default function StudentNotes({notes, setNotes}) {

  //function for submitting a new note
  function noteSubmit(event) {
    event.preventDefault();

    //get the values in the input boxes
    const commenterName = event.target.commenter.value;
    const userComment = event.target.comment.value;

    //check if they have a value
    if (!commenterName || !userComment) {
      alert("Please enter values into both fields.");
    } else {
      //create an object and assign the values to it
      const commentObject = {
        "commenter": commenterName,
        "comment": userComment
      }

      //clear the fields
      event.target.commenter.value = "";
      event.target.comment.value = "";
      //set the state to be the comment array plus the new comment
      setNotes([...notes, commentObject])
    }

  }

  return (<div
    className="Student-notes">
    <h4>1-on-1 notes</h4>

    <form
      onSubmit={(e) => noteSubmit(e)}>
      <label
        htmlFor="commenter">Commenter Name</label>
      <input
        name="commenter"
        id="commenter"></input>
      <br />

      <label
        htmlFor="comment">Comment</label>
      <input
        name="comment"
        id="comment"></input>
      <br />

      <button
        type="submit"
        className="note-button">Add Note</button>
    </form>

    {/* the comments will go here */}
    <ul>
      {notes.map((note, index) => {
        return (<li
          key={index}>
            {note.commenter} says "{note.comment}" 
        </li>)
      })}
    </ul>

  </div>)
}