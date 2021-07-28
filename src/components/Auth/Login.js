import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    
    const signIn = e => {
        e.preventDefault(); //basically it does not refresh
        
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/ ')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/home'>
           <img className="login-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt=""
            />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password" value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="login-signin-button"                         
                        onClick={signIn}
                        type="submit">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in, you agree to Amazon-fake-clone's 
                    Conditions of Use & Sale. Please see 
                    our Privacy Notice, our Cookies Notive and 
                    our Internet-Based Ads
                </p>
                
                <button className="login-register-button" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
