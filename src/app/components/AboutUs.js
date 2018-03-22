
import React, {Component} from "react";
import PropTypes from "prop-types";
import store from "../store"; // how to use redux directly in react
import * as actions from "../actions";


export default class About extends Component {
    componentDidMount(){
		// subscribe returns a unsubscribe function
		this.unsubscribeFn =  store.subscribe ( () => {
			console.log("About Subscribe");
			this.forceUpdate();
		});
		this.killSetInterval = setInterval(()=>{
			//console.log("The time right now => ", Date())
		},2000);
	}

	componentWillUnmount(){
		// unsubscribe subscription
		this.unsubscribeFn();
		clearInterval(this.killSetInterval);
	}
	
	increment = () => {
		store.dispatch(actions.increment(1));
	}

	decrement = () => {
		store.dispatch(actions.decrement(1));
	}
    
    render(){
		console.log("About render");
		let counter = store.getState().counter;
        return (
            <React.Fragment> 
			<h2>About</h2>
			<p>Counter {counter}</p>
			<button onClick={this.increment}>+1</button> <button onClick={this.decrement}>-1</button>
            </React.Fragment>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}