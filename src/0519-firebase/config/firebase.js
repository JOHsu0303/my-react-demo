// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRx42s0MXDxD2ck8S80i8M-7B2_JSgb8s",
  authDomain: "react-2025-d0ace.firebaseapp.com",
  projectId: "react-2025-d0ace",
  storageBucket: "react-2025-d0ace.firebasestorage.app",
  messagingSenderId: "156465697671",
  appId: "1:156465697671:web:559b7fcd42c0c2d91d7922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
