
import { useState } from "react"

export default function StudentNotes(props) {

  //assign the student prop to a variable
  const student = props.student

  //create a state for the notes array 
  const [notes, setNotes] = useState([...student.notes])

  return (<div
    className="Student-notes">
    <h4>1-on-1 notes</h4>

    <form>
      <label
        htmlFor="commentor">Commentor Name</label> 
      <input
        name="commentor"
        id="commentor"></input>
      <br/>

      <label
        htmlFor="comment">Comment</label>
      <input
        name="comment"
        id="comment"></input>
      <br/>

      <button 
      type="submit"
      className="note-button">Add Note</button>
    </form>

    {/* when show more is clicked, under details */}
    {/* show form from new notes and all previous notes under the form */}

  </div>)
}