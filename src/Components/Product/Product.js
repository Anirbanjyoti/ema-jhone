import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    

    return (
        <div  className='product'>
                <div>
                <img src={img} alt="" className='image-size'/>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings}</p>
                </div>
                <div className='product-cart'>
                <button onClick={() => props.handleAddToCart(props.product)} className="addTocart">
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                </div>
        </div>
    );
};

export default Product;