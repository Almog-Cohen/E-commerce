import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxUH_nSULV1-dhvOsPLt4tj4w9f65GmTI",
  authDomain: "e-commerce-ce132.firebaseapp.com",
  projectId: "e-commerce-ce132",
  databaseURL: "https://e-commerce-ce132.firebaseio.com",
  storageBucket: "e-commerce-ce132.appspot.com",
  messagingSenderId: "758595404740",
  appId: "1:758595404740:web:046d818a84584b9aa45a91",
  measurementId: "G-6XX5XKQJ9R",
};

// Initalize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initalize database
const db = firebaseApp.firestore();

// Firebase authentiction
const auth = firebase.auth();
const analythics = firebase.analytics();

export { db, auth, analythics };
