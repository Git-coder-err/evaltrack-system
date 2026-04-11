// Firebase Configuration for EvalTrack
// This file initializes Firebase with your project credentials

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
// Project: EvalTrack-System (evaltrack-system-bd538)
const firebaseConfig = {
  apiKey: "AIzaSyADpJGV1Nz1BLFxR3QYbJLSBYJXxHt9hho",
  authDomain: "evaltrack-system-bd538.firebaseapp.com",
  projectId: "evaltrack-system-bd538",
  storageBucket: "evaltrack-system-bd538.firebasestorage.app",
  messagingSenderId: "202662855989",
  appId: "1:202662855989:web:f37501ed7225005f50b87c",
  measurementId: "G-87YFVHCGQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services for use in other modules
export {
  app,
  analytics,
  auth,
  db,
  storage,
  // Auth functions
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // Firestore functions
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL
};

console.log('Firebase initialized for EvalTrack-System');
