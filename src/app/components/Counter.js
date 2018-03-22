import React from "react";
import PropTypes from "prop-types";


// Functional/Presentation component
export default function Counter(props) {
	return(
		<React.Fragment>
			<h2>Counter</h2>
			<p>Counter {props.counter}</p>
			<button onClick={()=>props.increment(1)}>+1</button>
			<button onClick={()=>props.decrement(1)}>-1</button>
		</React.Fragment>
	)
}

Counter.PropTypes = {
	increment: PropTypes.func,
	decrement: PropTypes.func,
	counter: PropTypes.number,
}