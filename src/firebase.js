import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA23mZH9n5_9gzioYHAhb3jGbV2iKo7uwg",
  authDomain: "kudasaichat.firebaseapp.com",
  projectId: "kudasaichat",
  storageBucket: "kudasaichat.appspot.com",
  messagingSenderId: "114561575754",
  appId: "1:114561575754:web:2ee6ed5441f829fd936fb3",
  measurementId: "G-EVG0V5W26E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
