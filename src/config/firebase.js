// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrJ9HnDy7QyYyGTzcsOeWZGzvQCV6eosQ",
  authDomain: "vite-contact-9c49c.firebaseapp.com",
  projectId: "vite-contact-9c49c",
  storageBucket: "vite-contact-9c49c.appspot.com",
  messagingSenderId: "673758724434",
  appId: "1:673758724434:web:6ce003d9a25eaee2c0ba8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
