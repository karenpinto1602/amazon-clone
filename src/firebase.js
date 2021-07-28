import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeg8OqQHad4baDjQ7BPua34cZS-6MSp-8",
    authDomain: "clone-802f3.firebaseapp.com",
    projectId: "clone-802f3",
    storageBucket: "clone-802f3.appspot.com",
    messagingSenderId: "619979057879",
    appId: "1:619979057879:web:ab8ebcb2313dc6a6e69e92",
    measurementId: "G-9DR1VN31S6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //initialize the database
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
