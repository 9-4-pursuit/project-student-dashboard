import { useState } from "react";

function Comments() {
  let [text, setText] = useState({ name: "", comment: "" });
  let [commentData, setCommentData] = useState([]);

  function handleChange(e) {
    setText({
      ...text,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCommentData([...commentData, text]);
  }

  return (
    <section className="commentsWrapper">
      <h4>1-on-1 Notes</h4>

      <form onSubmit={handleSubmit} className="commentForm">
        <label className="labela" htmlFor="name">
          Commenter Name
          <input
            id="name"
            type="text"
            value={commentData.name}
            onChange={handleChange}
          />
        </label>
        <label className="labelb" htmlFor="comment">
          Comment
          <input
            id="comment"
            type="text"
            value={commentData.comment}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Note</button>
      </form>

      <ul className="comments">
        {commentData.map((item) => {
          return <li>{`${item.name} says, "${item.comment}"`}</li>;
        })}
      </ul>
    </section>
  );
}

export default Comments;
