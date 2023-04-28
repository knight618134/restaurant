// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhggxTVDtGC2-ClUFDbV-7pc0ql7eo9C4",
  authDomain: "teishoku-17e3d.firebaseapp.com",
  projectId: "teishoku-17e3d",
  storageBucket: "teishoku-17e3d.appspot.com",
  messagingSenderId: "142193571938",
  appId: "1:142193571938:web:ee39135d13eb33d7ddb93b",
  measurementId: "G-SL0PMT0Q92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);