// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-YZsDuZUHHIfv-q0V7dgyvsjR6GSxw0",
  authDomain: "tienda-coder-reactjs.firebaseapp.com",
  projectId: "tienda-coder-reactjs",
  storageBucket: "tienda-coder-reactjs.appspot.com",
  messagingSenderId: "71004002432",
  appId: "1:71004002432:web:4a11492893a630442a6e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)