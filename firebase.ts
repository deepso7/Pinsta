// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefaYQPffwXDCb7ct3VlYdMNR5FOlER5c",
  authDomain: "pinsta-7aff3.firebaseapp.com",
  projectId: "pinsta-7aff3",
  storageBucket: "pinsta-7aff3.appspot.com",
  messagingSenderId: "763999480223",
  appId: "1:763999480223:web:82e596bb06d49e6674b5aa",
  measurementId: "G-SBRS5H9580",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
