import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<nav className="page-navigation">
			<Link to="/">Books</Link>
			<Link to="/characters">Characters</Link>
			<Link to="/houses">Houses</Link>
		</nav>
	);
}

export default Navigation;
