import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBxkEuBeaA8YxgBzswaS3BqGmCdzYCGyXM",
    authDomain: "chatty-f1a62.firebaseapp.com",
    databaseURL: "https://chatty-f1a62.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();