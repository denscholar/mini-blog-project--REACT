import { Link } from "react-router-dom";

const NotfoundPage = () => {
    return ( 
        <div className="notfoundpage">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to='/'>
                Back to the home page...
            </Link>
        </div>
     );
}
 
export default NotfoundPage;