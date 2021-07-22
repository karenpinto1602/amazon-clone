import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
//import StarHalfIcon from '@material-ui/icons/StarHalf';

function Product({id, title,price,rating,image}) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>            
                <div className="product-rating">
                    {Array(rating).fill().map((_,i) => (
                        <p><StarIcon /></p>
                    ))}                    
                </div>
            </div>
            <img 
                className="" 
                src={image}
                alt=""
            />
            <button className="product-button">Add to Cart</button>
            
        </div>
    )
}

export default Product
