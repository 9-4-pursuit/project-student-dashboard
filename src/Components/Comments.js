import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = `${commenterName} says, ${comment}`;
    const newArray = comments.concat([newComment]);
    setComments(newArray);
  }

  return (
    <>
      <div className="comments">
        <form className="comments" onSubmit={handleSubmit}>
          <h3>1-on-1 Notes</h3>
          <label>Commenter Name</label>
          <input
            type="text"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
          />
          <br />
          <label>Comment</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <button type="submit">Add Note</button>
        </form>
        {comments.map((comment, index) => <p key={index}>{comment}</p>)}
      </div>
    </>
  )
};

export default Comments;
