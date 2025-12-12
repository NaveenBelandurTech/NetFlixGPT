// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPbKDP3bYOrC1cDQJ-WIY8Cc6AB_KvKEQ",
  authDomain: "netflix-gpt-cab37.firebaseapp.com",
  projectId: "netflix-gpt-cab37",
  storageBucket: "netflix-gpt-cab37.firebasestorage.app",
  messagingSenderId: "540771569264",
  appId: "1:540771569264:web:2dc02b6ba4f9b1507baeb5",
  measurementId: "G-69B7CQQC7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()