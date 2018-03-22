import React, { Component } from "react";
import PropTypes from "prop-types";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ id: 1, name: "Product 1", price: 100, qty: 1 }],

      //derived data from items
      amount: 0,
      count: 0,

      flag: true
    };

    //ES5 way to bind object with function
    //this.removeItem = this.removeItem.bind(this);
  }



  reCalculate(items) {
    let amount = 0,
      count = 0;

    for (let item of items) {
      amount += item.qty * item.price;
      count += item.qty;
    }

    this.setState({
      amount,
      count
    });
  }



  addItem() {
    let id = Math.ceil(Math.random() * 1000000);
    let item = {
      id, // syntatic sugar id: id
      name: `Product ${id}`,
      price: Math.ceil(Math.random() * 100),
      qty: 1
    };

    // immutability for array
    //TODO

    let newItems = [...this.state.items, item];
    this.setState({
      items: newItems
    });

    this.reCalculate(newItems);
  }




  //ES Next method, we convert the remove method to an arrow function
  removeItem = id => {
    //TODO
    console.log("removeItem ", id);

    let newItems = this.state.items.filter(item => item.id != id);
    this.setState({
      items: newItems
    });

    this.reCalculate(newItems);
  }



  updateItem = (id, qty) => {
    //TODO
    
    qty=parseInt(qty);

    console.log("cart updateItem", id, qty)

    //Step 1: immutable list
    let newItems = this.state.items.map( item => {
      if(item.id != id) {
        return item;
      }
      // item to be updated
      
      
      // BAD mutating object directly instead of update the object in state
      //item.qty = qty;

      // GOOD, immutabe way, we make a copy of the original item and then add the new value, diretly to the qty. we did not touch the original item
      // ES6 Assign
      let newItem = Object.assign({}, item, {qty});
      return newItem;

      //ES Next, object spread operator {...}
      //return {...item, qty}
    });

    this.setState({
      items: newItems
    });

    this.reCalculate(newItems);
  }



  empty(){
    //TODO

    this.setState({
      items: []
    });

    this.reCalculate([]);
  }



  //dummy
  refresh(){
    this.setState({
      flag: this.state.flag
    });
  }

  

  componentWillMount() {
    console.log("cart will mount");
    this.reCalculate(this.state.items);
  }

  render() {
    console.log("Cart render");

    return (
      <div className="cart-wrapper">
        <h2>Cart</h2>
        <button onClick={() => this.addItem()}>Add</button>
        <button onClick={() => this.empty()}>Empty</button>
        <button onClick={() => this.refresh()}>Refresh</button>

        <CartList
          items={this.state.items}
          onRemove={this.removeItem} onUpdate={this.updateItem} />

        <CartSummary amount={this.state.amount} count={this.state.count} />
      </div>
    );
  }
}

Cart.defaultProps = {};

Cart.propTypes = {};
