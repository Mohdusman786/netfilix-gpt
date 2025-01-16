import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBON2032OrY3Mpn6QQ-yxiV9IU8Tec2-aI",
  authDomain: "netfilixgpt-560e1.firebaseapp.com",
  projectId: "netfilixgpt-560e1",
  storageBucket: "netfilixgpt-560e1.firebasestorage.app",
  messagingSenderId: "806424118159",
  appId: "1:806424118159:web:0db02b850209e6612c81fa",
  measurementId: "G-7K3V8VDR8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();