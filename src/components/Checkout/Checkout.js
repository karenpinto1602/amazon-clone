import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket,user}] = useStateValue();

    return (
        <div>
            <div className="checkout">
                <div className="checkout-lefts">
                    <img 
                        className="checkout-ad" 
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                    />
                    <div>
                        <h3>Hello {user?.email}</h3>
                        <h2 className="checkout-title">Your Shopping Basket</h2> 
                    </div>                
                </div>
                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
            <div className="checkout-list">
            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
            </div>
        </div>
    )
}

export default Checkout
