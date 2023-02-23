import { useState } from "react";
import "./OneOnOne.css";

export default function OneOnOne({ student }) {
  const [inputNotes, setInputNotes] = useState({ commenter: "", comment: "" });

  const handleChange = (e) => {
    setInputNotes({ ...inputNotes, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const getNotes = Object.fromEntries(formData);
    setInputNotes([...student.notes, getNotes]);
    // console.log(inputNotes);
    e.currentTarget.reset();
  };

  return (
    <div className="one-on-one">
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter"> Commenter Name </label>
        <input
          type="text"
          onChange={handleChange}
          id="commenter"
          name="commenter"
          required
        />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          onChange={handleChange}
          id="comment"
          name="comment"
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-display">
        <ul className="notes-list">
          {inputNotes.length > 0 &&
            inputNotes.map((note, index) => (
              <li key={index}>
                {note.commenter} says, "{note.comment}"
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
