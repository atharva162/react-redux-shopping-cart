import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/shoppingcart';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import CheckoutPage from './components/CheckoutPage';

const App = () =>  (

   <Provider store={store}>
    <Router>
       <Switch>
          <PrivateRoute exact path="/" component={Products}/>
          <PrivateRoute path="/cart" component={Cart}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/checkout" component={CheckoutPage}/>
       </Switch>
    </Router>
   </Provider>
)
export default App;