import {connect} from "react-redux";
import { bindActionCreators } from "redux"
import Counter from "../components/Counter";
import * as actions from "../actions";


// called by container
// on every subscribe
// state = store.getState()
// { counter: 1000 }
// Pure function
// returns props, that will be passed to component
function mapStateToProps(state){
	console.log("Counter mapStateToProps ", state);
	return {
		counter: state.counter
	};
}

// dispatch
// container calls this method
// when: on every object creation, not subscribe
// returns props that contains methos
function mapDispatchToProps(dispatch) {
	console.log("Counter container mapDispatchToProps");
	return {

		// bindActionCreators returns a new function that binds action.imcreament and dipatch together
		increment: bindActionCreators(actions.increment, dispatch),

		// increment: function(){
		// 	let action = actions.increment(1);
		// 	dispatch(action);
		// },
		decrement: function(){
			let action = actions.decrement(1);
			dispatch(action);
		}
	}
}

// let connectFn = connect(mapStateToProps, mapDispatchToProps);

// // store is exposed as context variable from Provider
// // Provider in main.js
// let CounterContainerComponent = connectFn(Counter);

// export default CounterContainerComponent;

export default connect(mapStateToProps, mapDispatchToProps) (Counter);