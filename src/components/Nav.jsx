import { NavLink, Link } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<h1>My Life</h1>
			</Link>
			<div>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/blog'>Blog</NavLink>
				<NavLink to='/contact'>Contact</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
