// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJFAMBrPo0Q8D5vkSMhiLhijpbJ1gPKU",
  authDomain: "pedal-price.firebaseapp.com",
  projectId: "pedal-price",
  storageBucket: "pedal-price.appspot.com",
  messagingSenderId: "1080473235985",
  appId: "1:1080473235985:web:e038742e5db864db70b7b0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;