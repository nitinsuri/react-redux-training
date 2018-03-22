import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

export default class CartList extends PureComponent {
  constructor(props) {
    super(props);
  }

//   shouldComponentUpdate(nextProps, nestState){
//     console.log("CartList Should Update " ,nextProps.items != this.props.items);

//     return nextProps.items != this.props.items;
//   }

  render() {
    console.log("CartList render");
    let { items, onRemove } = this.props;

    return (
      <div>
        <h2>Cart List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map( item => <CartItem
                                        item={item}
                                        key={item.id}
                                        onRemove={onRemove}
                                        onUpdate={this.props.onUpdate} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

CartList.defaultProps = {};

CartList.propTypes = {};