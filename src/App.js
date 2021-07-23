import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    //Using BEM convention
    <Router>
      <div className="app">
        <Header />
        <Switch>          
          <Route path="/checkout" exact component={Checkout} />            
          <Route path="/" exact component={Home} />                    
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
