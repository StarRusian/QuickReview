// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quickreview23-e4a65.firebaseapp.com",
  projectId: "quickreview23-e4a65",
  storageBucket: "quickreview23-e4a65.appspot.com",
  messagingSenderId: "870681313745",
  appId: "1:870681313745:web:3a0c9312d432eff97e60f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

