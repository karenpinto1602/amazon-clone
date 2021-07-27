import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './../Checkout/StateProvider';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
//import StarHalfIcon from '@material-ui/icons/StarHalf';

function Product({id, title,price,rating,image}) {
    
    const [{basket}, dispatch]  = useStateValue();
    console.log("This is the basket: ",basket);
    const addToBasket = () =>{
        /* dispatch the item into the data layer */
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>            
                <div className="product-rating">
                    {Array(rating).fill().map(() => (
                        <p><StarIcon /></p>
                    ))}                    
                </div>
            </div>
            <img 
                className="" 
                src={image}
                alt=""
            />
            <button 
                className="product-button"
                onClick={addToBasket}>
                Add to Cart
            </button>
            
        </div>
    )
}

export default Product
