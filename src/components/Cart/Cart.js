import React, {useState, useEffect} from 'react'
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const cart = useSelector((state)=> state.cart);
    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((item)=> {
            items += item.quantity;
            price += item.price * item.quantity;
        });
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return (
      <>
      <Navbar/>
        <div className="cart">
            <div className="cart_items">
              {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart_summary">
             <h4 className="summary_title">
               Cart Summary
             </h4>
             <div className="summary_price">
               <span>Total: {totalItems} items</span>
               <br/>
               <span>Rs. {totalPrice}</span>
             </div>
             <Link to="/checkout">
             <button className="summary_checkoutBtn">
               Proceed to checkout
             </button>
             </Link>
            </div>
        </div>
        </>
    )
}

export default Cart
