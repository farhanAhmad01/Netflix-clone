import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPcrrvFVRvBTZFQlnqACd4XwV-i0FYuTs",

  authDomain: "netflix-clone-3e25b.firebaseapp.com",

  projectId: "netflix-clone-3e25b",

  storageBucket: "netflix-clone-3e25b.appspot.com",

  messagingSenderId: "1023885288535",

  appId: "1:1023885288535:web:13bd583e5a56281cb86f12",

  measurementId: "G-70VGZ0L7X8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };
