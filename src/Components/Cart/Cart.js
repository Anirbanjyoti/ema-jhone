import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let neTax = parseFloat(tax);

    // console.log(tax);
    const grandTotal = total + shipping + neTax;
    return (
        <div>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${neTax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;