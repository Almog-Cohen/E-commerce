import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxUH_nSULV1-dhvOsPLt4tj4w9f65GmTI",
  authDomain: "e-commerce-ce132.firebaseapp.com",
  projectId: "e-commerce-ce132",
  storageBucket: "e-commerce-ce132.appspot.com",
  messagingSenderId: "758595404740",
  appId: "1:758595404740:web:046d818a84584b9aa45a91",
  measurementId: "G-6XX5XKQJ9R",
};

// Initalize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initalize database
const db = firebaseApp;

// Firebase authentiction
const auth = firebase.auth();

export { db, auth };
