import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {App} from "./App";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Counter from "./containers/CounterContainer";

import Cart from "./cart/components/Cart";

import ReduxCart from "./reducx-cart/containers/Cart";

import ProductList from "./product/containers/ProductList"

//Functional component
export default function Routes(props) {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/counter" component={Counter} />
          <Route path="/redux-cart" component={ReduxCart} />
          <Route path="/products" component={ProductList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  );
}