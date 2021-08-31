
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to="/">Aerchain</Link>
        </div>
        <div>
         
          <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
         
       
             
      </main>
      <footer className="row center">Annanay Sharma</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
