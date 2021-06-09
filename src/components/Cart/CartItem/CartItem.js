import React, {useState} from 'react';
import './CartItem.css';
import { adjustQuantity, removeFromCart } from '../../../redux/shoppingcart'
import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState(item.quantity);
    const deleteFromCart = (itemId) => dispatch(removeFromCart(itemId));
    const handleChange = (e) => {
       setInput(e.target.value);
       dispatch(adjustQuantity(item.id, e.target.value));
    }
    return (
        <>
        <div className="cartItem">
        <img className="cartItem_image" src={item.image} alt={item.title}/>
        <div className="cartItem_details">
          <p className="details_title">{item.title}</p>
          <p className="details_description">{item.description}</p>
          <p className="details_price">Rs. {item.price}</p>
        </div>
        <div className="cartItem_actions">
          <div className="cartItem_qty">
            <label htmlFor="qty">Qty</label>
            <input min="1" type="number" id="qty" name="qty" value={input} onChange={handleChange}/>
          </div>
          <button className="actions_deleteItemBtn" onClick={deleteFromCart.bind(null, item.id)}>
           Remove from cart
          </button>
        </div>
        </div>
        </>
    )
}

export default CartItem
