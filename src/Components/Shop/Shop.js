import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [ products, setProducts] = useState([]);
    const [ products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    
    // useEffect( () => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])
    
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map( product => <Product 
                    key={product.id}
                    product = {product}
                     handleAddToCart = {handleAddToCart}   
                    ></Product>)
                }   
            </div>
            <div className='cart-summery'> 
            <h2>Order summery</h2> 
                <p>Total Products: {products.length}</p>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;