import { Link } from "react-router-dom";

//if you want React to handle the routing only in the browser and intercept request for new pages, we will need to replace the ankle tag with 'link' and then import 'Link' from 'react-router-dom'
const Navbar = () => {
   
    return (
 
        <nav className="navbar">
            <h1>Dennis Blog</h1>
              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: 'grey',
                    paddingLeft: '10px',
                    borderRadius: '8px'
                }} >New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;