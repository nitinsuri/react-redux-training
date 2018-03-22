import React, {PureComponent} from "react";
import PropTypes from "prop-types";



export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }

    // called when parent render called on update cycyle
    componentWillReceiveProps(nextProps){
        console.log("Summary will receive props");
        console.log("Next Props", nextProps);
        console.log("Current props ", this.props);
    }


    // this is not scaleable as everytime we add a new item to the object, we will have to update the return statement each time. Hence lets comment out the below code and then change this component to PureComponent
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("CartSummary Should Update " ,this.props.count != nextProps.count || this.props.amount != nextProps.amount);

    //     return this.props.count != nextProps.count || this.props.amount != nextProps.amount;
    // }
     
    render() {
        console.log("CartSummary render");

        let {
            count,
            amount
        } = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>
            <p><u>Amount:</u> <strong>{amount}</strong> | <u>Totale Items:</u> <strong>{count}</strong></p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}