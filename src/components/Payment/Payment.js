import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../Checkout/StateProvider';
import './Payment.css';

function Payment() {

    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout (
                        <Link to='/checkout'>
                            {basket?.length} items
                        </Link>
                    )
                </h1>

                {/* DElivery */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 Bangalore</p>
                        <p>Karnataka</p>
                    </div>
                </div>
                {/* items */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                email={item.email}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
