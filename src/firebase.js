// firebaseApp.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChsKdOmlbDoMmEeTdJHEwNdj9etRzeILk",
  authDomain: "teistextsearch.firebaseapp.com",
  projectId: "teistextsearch",
  storageBucket: "teistextsearch.appspot.com",
  messagingSenderId: "140539177334",
  appId: "1:140539177334:web:6594ca19906d0dc15c3257",
  measurementId: "G-9C043H1X7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
