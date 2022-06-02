import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products] = useProducts();
    const [cart] = useCart();
    console.log(cart);
    
    return (
        <div>
            <h1>This is Order page : {products.length}</h1>
            <p>Cart has: {cart.length}</p>
            
        </div>
    );
};

export default Orders;