import { useParams, useHistory } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams(); //This allows us to grab route parameters from the route. then we will need to distructure whatever route parameter we want.
    const { data, isLoading, error } = UseFetch('http://localhost:9000/blogs/'+ id);
    
    //this handles the delete of each blog post
    const handleClick = () =>{
        //do a fetch request first
        fetch('http://localhost:9000/blogs/'+ id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by: {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>

                    
                </article>)}
        </div>
    );
}

export default BlogDetails;