import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../Checkout/StateProvider';
import Order from './Order';

import './Orders.css';

function Orders() {
    const [orders,setOrder] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        if(user){
        db
         .collection('users')
         .doc(user?.uid)
         .collection('orders')
         .orderBy('created','desc')
         .onSnapshot(snapshot => {
             setOrder(snapshot.docs.map(doc => ({
                 id: doc.id,
                 data: doc.data()
             })))
         }) 
        }else{
            setOrder([]);
        }     
    }, [user]);

    return (
        <div className="orders">
            <h1 style={{paddingLeft: "20px"}}>Your Orders</h1>
            <div className="orders-order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
