import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Product from './Product/Product';
import './Products.css';

const Products = () => {
    const products = useSelector((state) => state.products)
    return (
        <>
        <Navbar/>
       <div className="products">
       {products.map((product)=>(
           <Product key={product.id} product={product}/>
       ))}
       </div>
       </>
    )
}

export default Products
