import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div>
			Welcome to meme
			<Link to="/login">GO TO LOGIN</Link>
		</div>
	);
}
