// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtonUcoQ33nxLftmDQzxiPJJbV9tX7zMk",
  authDomain: "react-chat-bg.firebaseapp.com",
  projectId: "react-chat-bg",
  storageBucket: "react-chat-bg.firebasestorage.app",
  messagingSenderId: "635626289312",
  appId: "1:635626289312:web:e7a529e7548fef335d71c5",
  //measurementId: "G-J9M3REH2WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)