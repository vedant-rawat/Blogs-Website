import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABqfwp8RwN5bXaT6rOiHckpBycMtWUoVw",
  authDomain: "blogs-6a2d3.firebaseapp.com",
  projectId: "blogs-6a2d3",
  storageBucket: "blogs-6a2d3.appspot.com",
  messagingSenderId: "420068312812",
  appId: "1:420068312812:web:44035b5cea712fe2d347c9",
  measurementId: "G-CFS4QP41BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();  