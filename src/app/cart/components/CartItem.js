import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state={
        qty: props.item.qty
    }
  }

    //ES Next
    static contextTypes = {
        discount: PropTypes.string,
        theme: PropTypes.string,
    }

  componentWillUnmount() {
      console.log("CartItem will unmount!");
  }

  // let know the component that it will receive some new items
  componentWillReceiveProps(nextProps){
      this.setState({
          qyt: nextProps.item.qty
      });
  }

  //ES Next
  onChangeText = e => {
      //target is the input element, real dom element
      let target = e.target;

      this.setState({
          qty: target.value
      });
  }

  componentDidMount(){
      // all the refs are resolved here once the component mounts
      this.inputElem.focus();
      
      this.refs.discount.textContent = this.context.discount;
  }

  render() {
    console.log("CartItem render", this.props.item.id);

    console.log("Context", this.context.discount, this.context.theme)

    let { item } = this.props;

    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}
            <span className="discount-val" ref="discount"></span>
        </td>
        <td>
            <input
                value={ this.state.qty }
                type="number"
                onChange={ this.onChangeText }
                onBlur={ () => this.props.onUpdate(item.id, this.state.qty) }
                ref = { elem => this.inputElem = elem }
            />
        </td>
        <td> {item.price * item.qty} </td>
        <td>
          <button onClick={() => this.props.onRemove(item.id)}>Remove</button>
        </td>
      </tr>
    );
  }
}

CartItem.defaultProps = {};

CartItem.propTypes = {};
