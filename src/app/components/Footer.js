import React from 'react';
import PropTypes from "prop-types";

// returns virtual DOM without the render function as we declared it a FUNCTION, this can also be called as presentation component, stateless component
// AS this is a function component, the 'props' becomes an argument and can be replaced with any other word
export default function Footer(props){
	console.log("Footer render called");

	// Using deconstruct as a use case
	let {year, appTitle} = props;
	
	return (
		<footer>
			<hr />
			<p>{appTitle}, &copy;{year}</p>
			{props.children}
		</footer>
	)
}

Footer.propTypes = {
	appTitle : PropTypes.string,
	year: PropTypes.number.isRequired,
}