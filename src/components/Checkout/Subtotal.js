import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{basket}] = useStateValue();

    const getBasketTotal = (basket) => {
        var price = 0;
        basket.map((data) => {
            price = price + data.price;
        })
        console.log("from here: ",basket);
        return price;
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={" Rs "}
            >
            </CurrencyFormat>
            <button>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal
