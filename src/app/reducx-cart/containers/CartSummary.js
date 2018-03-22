import { connect } from "react-redux";

import CartSummary from "../components/CartSummary";

//Good reselect package
//BAD

function recalculate(items) {
  console.log("RECALCULATE ", items);
  let amount = 0,
    count = 0;

  for (let item of items) {
    amount += item.qty * item.price;
    count += item.qty;
  }

  return {
    amount, //ES6 sugar amount: amount
    count
  };
}

const mapStateToProps = state => {
  let result = recalculate(state.items);

  // old style
  return {
    amount: result.amount,
    count: result.count
  };
  //OR
  //ES6
  //return {...result};
};

export default connect(mapStateToProps, null)(CartSummary);