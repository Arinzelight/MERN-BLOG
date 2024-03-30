// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-47db3.firebaseapp.com",
  projectId: "mern-blog-47db3",
  storageBucket: "mern-blog-47db3.appspot.com",
  messagingSenderId: "848724389246",
  appId: "1:848724389246:web:d50e363a006910a792172f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
