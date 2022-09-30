import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
//Importacoes para projeto 2
//import

// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCRP9gGWdFe3AsswWa7IpxgKK0AteSKyE",
    authDomain: "mindbooster-4ec83.firebaseapp.com",
    projectId: "mindbooster-4ec83",
    storageBucket: "mindbooster-4ec83.appspot.com",
    messagingSenderId: "137994034428",
    appId: "1:137994034428:web:ff201db1de34589aaa0b79",
    measurementId: "G-12H6BB7GJ1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;