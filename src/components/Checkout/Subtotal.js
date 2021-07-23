import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value='0' //{getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"Rs "}
            >
            </CurrencyFormat>
            <button>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal
