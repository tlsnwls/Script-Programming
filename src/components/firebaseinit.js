// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbhjGvGbu5qVjsWg6-RuD4bgewo1k46cM",
  authDomain: "grazie-3c2e0.firebaseapp.com",
  projectId: "grazie-3c2e0",
  storageBucket: "grazie-3c2e0.appspot.com",
  messagingSenderId: "938711746481",
  appId: "1:938711746481:web:0161f891a7ff63a0ee1f90",
  measurementId: "G-29CH8B91G6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth};