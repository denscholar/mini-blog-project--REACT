// import { useState, useEffect } from "react";
import BlogList from "./blogList";
import UseFetch from "./useFetch";

const Home = () => {
const {data, isLoading, error} = UseFetch('http://localhost:9000/blogs'); //call the useFetch here and pass the API resource inside.
    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs={data} title='All Blogs' />}
            {/* explanation: the condition on the right will output to the screen if the condition on the left (blogs) evalate to true */}
        </div>
    );
}

export default Home; 