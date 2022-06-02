import React, { useEffect, useState } from 'react';
// import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [ products, setProducts] = useState([]);
    const [ products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    // const [cart, setCart] = useCart();
    
    // useEffect( () => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
            if(addedProduct){
                const quantity =storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            } 
        }
        setCart(savedCart);
    }, [products])
    
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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