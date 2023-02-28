import { useState } from "react";

const Comments = () => {
    const [comment, setComment] = useState({commenter:"", comment:""})

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    function handleComment(e) {
      setComment({...comment, [e.target.name]:e.target.value})
    }

    return (
        <>
      <div className="comments">
        <form className="comments" onSubmit = {handleSubmit} >
          <h3>1-on-1 Notes</h3>
          <label> Commenter Name </label>
          <input type="text" onChange={handleComment}></input>
        <br />
          <label> Comment </label>
          <input type="text" onChange={handleComment}></input>
        <br />
        <button type="submit">Add Note</button>
        </form>
    {/* <p>{comment.commenter} says: {comment.comment}</p>
        <p>{cohort.notes[0].commenter} says: {cohort.notes[0].comment}</p> */}
        </div>
    </>
    )

};
export default Comments;
