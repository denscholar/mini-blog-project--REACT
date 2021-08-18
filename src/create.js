import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //this invoke the hook


    const handleSubmit = (e) => {
        //prevent the default action first to prevent the page from refreshing
        e.preventDefault();
        //create a blog object
        const blog = { title, body, author }
        setIsPending(true);
        // send a post request to the endpoint
        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, //the type of data we are sending
            body: JSON.stringify(blog) //this converts the object to a string
        }).then(() => {
            console.log('a new blog added');
            setIsPending(false);
            history.push('/');
        });
        

    }
    return (
        <div className="create">
            <h2>ADD A NEW BLOG</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body</label>
                <textArea required value={body} onChange={(e) => setBody(e.target.value)}>

                </textArea>
                <label>Blog Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Dennis">Dennis</option>
                    <option value="Felix">Felix</option>
                </select> */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}


            </form>
        </div>
    );
}

export default Create;