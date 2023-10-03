// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-671ac.firebaseapp.com",
  projectId: "estate-mern-671ac",
  storageBucket: "estate-mern-671ac.appspot.com",
  messagingSenderId: "1027883385836",
  appId: "1:1027883385836:web:8a2f916027226afa9bf6c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
