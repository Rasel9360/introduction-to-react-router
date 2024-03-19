import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/posts">Posts</Link> */}
                <NavLink to="/posts">Posts</NavLink>
                {/* <Link to="/about">About</Link> */}
                <NavLink to="/about">About</NavLink>
                {/* <Link to="contact">Contact Us</Link> */}
                <NavLink to="/contact">Contact Us</NavLink>

            </nav>
        </div>
    );
};

export default Header;