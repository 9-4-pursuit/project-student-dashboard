export default function Comments() {

    return (
        <section>
            <br />
            <strong> 1-on-1 Notes </strong>
            <form>
                    <label> Commenter Name: </label>
                    <input type="text" onKeyUp={handleCommenter} />
                    <br></br>
                    <label> The Comment:  </label>
                    <input type="text" onKeyUp={handleComment} />
                    <br></br>
                    <button type="submit"> Add Comment </button>
            </form>
                <br></br>
            <section>
            </section>
        </section>
    )
}