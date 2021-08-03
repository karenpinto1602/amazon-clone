import React from 'react';
import moment from 'moment';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import './Order.css';

function Order({order}) {
    return (
        <div className="order">
            <div className="order-heading" >
                <h1>Order</h1>
                <p className="order-id">
                    <small>id: {order.id}</small>
                </p>
            </div>
           <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
           
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <h3 className="order-total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs. "}
            />            
        </div>
    )
}

export default Order
