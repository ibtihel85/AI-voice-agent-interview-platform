// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtw7nCaedVfIxjxvMoaW5GYElvPzXKLes",
  authDomain: "ibtihire.firebaseapp.com",
  projectId: "ibtihire",
  storageBucket: "ibtihire.firebasestorage.app",
  messagingSenderId: "907685406994",
  appId: "1:907685406994:web:d070daec0c4d0d43166bcb",
  measurementId: "G-4PEMFDHZ1S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);