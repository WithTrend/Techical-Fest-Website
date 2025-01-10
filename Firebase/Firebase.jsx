// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTLYT_zbU5FoE8kxX3wl8wGFWvSRRRruo",
  authDomain: "effulgence-195a8.firebaseapp.com",
  projectId: "effulgence-195a8",
  storageBucket: "effulgence-195a8.firebasestorage.app",
  messagingSenderId: "1006675062690",
  appId: "1:1006675062690:web:d317864477723ae3efccfb",
  measurementId: "G-GKMZS7JPC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
