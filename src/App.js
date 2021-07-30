import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Auth/Login';
import Payment from './components/Payment/Payment';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './components/Checkout/StateProvider';

function App() {

  const [,dispatch] = useStateValue();
  
  useEffect(() => {
    //will run only once when the app component loads...  
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ',authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 

  return (
    //Using BEM convention
    <Router>
      <div className="app">        
        <Switch>    
          <Route path="/login" exact component={Login} />             
          
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>  

          <Route path="/payment" >
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>                           
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
