import React from 'react';
import './CheckoutProduct.css';
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from './StateProvider';


function CheckoutProduct({id,image,title,price,rating, hideButton=false}) {

    const [,dispatch] = useStateValue();

    /* Remove item from basket */
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image"  
                src={image} 
                alt=""
            />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <strong>Rs. </strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p><StarIcon /></p>
                    ))}
                </div>
                {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
