// firebase-config.js
// Firebase v10+ uses ES Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIXGom_E_hngM47SrQy2Ag-gElcGu8zIs",
  authDomain: "watchlist-manager-45083.firebaseapp.com",
  projectId: "watchlist-manager-45083",
  storageBucket: "watchlist-manager-45083.firebasestorage.app",
  messagingSenderId: "844230354025",
  appId: "1:844230354025:web:7a13ff13a17aeafbbbeef8",
  measurementId: "G-EYRNX0T47Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth, 
    db, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    collection, 
    getDocs, 
    onSnapshot 
};
