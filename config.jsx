// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUVQxTXZKTUvPJ-u-hhdjQ_ZtJEmz-aeQ",
  authDomain: "tugas-besar-e9751.firebaseapp.com",
  projectId: "tugas-besar-e9751",
  storageBucket: "tugas-besar-e9751.appspot.com",
  messagingSenderId: "122290401820",
  appId: "1:122290401820:web:980e158cd89595eb30a5d9",
  measurementId: "G-L59KZMF5WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)