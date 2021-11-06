// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import {getFirestore,collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNq6n9JmJoFSGNK8zXVtqFxSoXi76mNbg",
  authDomain: "my-portfolio-22a20.firebaseapp.com",
  projectId: "my-portfolio-22a20",
  storageBucket: "my-portfolio-22a20.appspot.com",
  messagingSenderId: "723144243284",
  appId: "1:723144243284:web:3c6ba6814a7a428639d5c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default app;