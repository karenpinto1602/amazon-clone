import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home-container">

                <img 
                    className="home-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> 

                <div className="home-row">
                    <Product 
                        id='101'
                        title='The Lean startup: How Constant innovation creates radically successful businesses paperback' 
                        price={19.99} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                    />
                    <Product 
                        id='102'
                        title='Kenwood KMix Stand Mixer for BAking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 Litre Gloass Bowl' 
                        price={239.0} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' 
                    />
                </div>
                <div className="home-row">
                    <Product 
                        id='103'
                        title="Samsung LC49RGFRGT 49' curved LED Gaming Monitor" 
                        price={199.99} 
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' 
                    />
                    <Product 
                        id='104'
                        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                        price={98.99} 
                        rating={5}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?300x400_retinamobilex2$' 
                    />
                    <Product 
                        id='105'
                        title='New Apple iPod Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
                        price={598.99} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' 
                    />
                </div>
                <div className="home-row">
                    <Product 
                        id='106'
                        title="Samsung LBAIUDGHVDCX 49' Curved LED Gaming Monitor - Super Ultra Wide dual WQHD 5120x1440" 
                        price={1090.98} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
                    />
                </div>

            </div> 
        </div>
    )
}

export default Home
