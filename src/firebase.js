import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7YXA0u7FnRWx0Q7MERIm8gXTt71EpcT8",
  authDomain: "chatzo-221cc.firebaseapp.com",
  projectId: "chatzo-221cc",
  storageBucket: "chatzo-221cc.appspot.com",
  messagingSenderId: "578623434253",
  appId: "1:578623434253:web:b29460e2de5e87317eef44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();