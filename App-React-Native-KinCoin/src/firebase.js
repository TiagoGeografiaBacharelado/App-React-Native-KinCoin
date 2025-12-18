// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgAwPhZh76PEw_HX7BSOOI_SQ0K777MbI",
  authDomain: "kincoin-login.firebaseapp.com",
  projectId: "kincoin-login",
  storageBucket: "kincoin-login.appspot.com",
  messagingSenderId: "728302173428",
  appId: "1:728302173428:web:25540a22adaaba9f47f2a1",
};

// 🔒 Garante que o app não será inicializado duas vezes
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 🔥 Serviços
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
