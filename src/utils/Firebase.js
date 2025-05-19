// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3DEzBy4TaWP5_WUfkWC3LYVvwC7UZtxA",
  authDomain: "netflics-eb62c.firebaseapp.com",
  projectId: "netflics-eb62c",
  storageBucket: "netflics-eb62c.firebasestorage.app",
  messagingSenderId: "367486229264",
  appId: "1:367486229264:web:ac26f256539b642db7e395",
  measurementId: "G-MB4REG2L73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export { auth };