import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJF5mHitmalVuTgHtLvq_NatS61s9VVRI",
  authDomain: "reddit-clone-r-7f1cf.firebaseapp.com",
  projectId: "reddit-clone-r-7f1cf",
  storageBucket: "reddit-clone-r-7f1cf.firebasestorage.app",
  messagingSenderId: "419901357599",
  appId: "1:419901357599:web:838cc8ec34f88b823a1f2a",
  measurementId: "G-6929XVX516"
};
// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
