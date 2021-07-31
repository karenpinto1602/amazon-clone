const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51JJFhySGiLm7uF2wp5HQxg3eCQKOzeOpHUFFTXHgIer5lLNyg8vqKGlk49XfnZxMm9lPm9h5QzSaxwzwYv1gFwZm00vmDNy7Wj');

// Setting up API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request,response) => response.status(200).send('hello world'));
app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM! for this amount: ',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-802f3/us-central1/api

