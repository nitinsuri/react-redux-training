import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";


export class App extends React.Component {
	constructor(){
		super();
		console.log("App component created");
	}

	// in ES NEXT only a static values can be set inside the class component
	static childContextTypes = {
		discount: PropTypes.string,
		theme: PropTypes.string
	}

	// keyword method
	getChildContext() {
		return {
			discount: "25%",
			theme: "red",
		}
	}

	// creates and returns virtual dom - immutable
	render(){
		console.log("App render");
		//JSX code
		return (
			<React.Fragment>
				<Header appTitle="Header - Kick-in the React App 2">This is a props.children item</Header>
				<main>
					{this.props.children}
				</main>
				<Footer appTitle="Footer Section" year={2018} /* when passing number, do not use the qoutes*/>This is a props.children item</Footer>
			</React.Fragment>
		)
	}
}