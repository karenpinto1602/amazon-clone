import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../Checkout/StateProvider';
import { db } from './../../firebase';
import axios from './../../axios';
import './Payment.css';


function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    const [error,setError] = useState(null);
    const [disable,setDisable] = useState(true);
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        //generate special stripe secret which allows us to charge a customer 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();        
    }, [basket]);

    console.log('THE SECRET IS : ',clientSecret);
    console.log(user?.uid);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation
            //This is using NOSQL Data structure
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket: basket,
                 amount: paymentIntent.amount,
                 created: paymentIntent.created
             });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET',                
            })

            history.replace('./orders');
        })
    }
    const handleChange = (e) => {
        // Listen for changes in the CardElement
        // add display any errors as the customer types their card details
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    }
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

                {/* Delivery */}
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
                        <form onSubmit={handleSubmit}>
                            <CardElement 
                                onChange={handleChange}
                                />
                            <div className="payment-price-container">
                                <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={'Rs. '}
                                />
                                <button disabled={processing || disable || succeeded}>
                                        <span>{processing ? "Processing" : "Buy now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
