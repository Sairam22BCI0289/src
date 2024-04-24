import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/Teams'>Team</Link>
        <Link to='/Teams2'>Search Players</Link>
        <Link to='/Contact'>Contact us</Link>
        </nav>
    );
}

export default Nav;