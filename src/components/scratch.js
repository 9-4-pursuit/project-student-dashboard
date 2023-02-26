// const baseURL = "https://robohash.org/"
// let randomNumber = Math.floor(Math.random() * 10000)
// let Photo = `${baseURL}${randomNumber}`

import { useState } from "react";

 {/* <img className="img" src={Photo} alt="" /> */}




/* max-content */

/* .ClassList {
    
    padding-left: 20px;
    border: 20px;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    background-color: cadetblue;
    grid-area: aside;
    cursor: pointer;
} */

/* .ClassList {
    box-sizing: border-box;
    height: 100%;
    display: grid;
    background-color: cadetblue;
    grid-area: aside;
    cursor: pointer;
} */

    /* height: 500px; */
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "image" "info" "ontrack"; */


    const [comments, setComments]  = useState([])

    const handleComments = (e) => {
        e.preventDefault();
        const commenterName = e.target.elements ["Commenter Name"].value
        const commentText = e.targe.elements.Comment.value;
        const newComment = `${commenterName}: ${commentText}`;
        setComments([...comments, newComment]);
        e.target.reseet();
    };


    <hr></hr>
        <div className="comment-section">
        <h2>1-on-1 Notes</h2>
        <form className="comment" onSubmit={handleComments}>
            <label htmlFor="Commenter Name">"Commenter Name"</label>
            <input type="text" name="Commenter Name" />
            <br></br>
            <label htmlFor="Comment">Comment</label>
            <input type="text" name="Comment" />
            <br></br>
            <button type="submit">Add Note</button>
            </form>    
        {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
        ))}    
        </div>