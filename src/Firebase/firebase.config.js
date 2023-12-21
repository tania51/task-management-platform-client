// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD63iLhrE6ip8U2Qwra9h9-3RGxaT89y_Y",
  authDomain: "task-management-platform-3e765.firebaseapp.com",
  projectId: "task-management-platform-3e765",
  storageBucket: "task-management-platform-3e765.appspot.com",
  messagingSenderId: "40675755656",
  appId: "1:40675755656:web:1a0402dfb582afd38d013d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
