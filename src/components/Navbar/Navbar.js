import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const cart = useSelector((state)=> state.cart);
    const [cartCount, setCartCount] = useState(0);
    const [username, setUsername] = useState('');
   
    useEffect(() => {
       const user = JSON.parse(localStorage.getItem('user')).name;
       setUsername(user);
    }, [])
    useEffect(() => {
        let count = 0;
        cart.forEach((item)=> {
            count += item.quantity;
        });
        setCartCount(count);
    }, [cart, cartCount]);
    return (
       <div className="navbar">
           <nav className="navbar navbar-dark bg-primary">
           <Link to="/">
             <h2 className="navbar-brand">Hi!! {username}</h2>
         </Link>
         <Link to="/cart">
                <i className="fas fa-cart-plus" style={{color: 'white', fontSize: '40px'}}></i>
               <div className="cart_counter" style={{color: 'white', fontSize: '20px'}}>{cartCount}</div>
         </Link>
        </nav>
        
       </div>
    )
}

export default Navbar
