// util/FirebaseInit.js


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIZHEVvx2hp1ntGXOA4Xjrz-7H2abTkrQ",
  authDomain: "my-app-605c1.firebaseapp.com",
  projectId: "my-app-605c1",
  storageBucket: "my-app-605c1.appspot.com",
  messagingSenderId: "375704637690",
  appId: "1:375704637690:web:a17e5a39fbf81823537943",
  measurementId: "G-K56FYNQ1XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
