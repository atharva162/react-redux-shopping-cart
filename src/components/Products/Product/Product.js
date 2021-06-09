import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/shoppingcart';
import './Product.css';

const Product = ({product}) => {
    const dispatch = useDispatch();
    const addInCart = (itemId) => dispatch(addToCart(itemId));
    return (
     <div className="product">
      <img className="product_img" src={product.image} alt={product.title}/>
      <div className="product_details">
        <p className="details_title">{product.title}</p>
        <p className="details_description">{product.description}</p>
        <p className="details_price">Rs. {product.price}</p>
      </div>
      <div className="product_buttons">
      <button className="buttons_btn buttons_add" onClick={addInCart.bind(null, product.id)}>
      Add to Cart
      </button>
      </div>
     </div>   
    )
}

export default Product
