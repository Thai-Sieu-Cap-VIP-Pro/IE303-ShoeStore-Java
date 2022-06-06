// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCaPSYjx464DgPpxh0fr3_s3wclQS8woh4",
  authDomain: "ie303-shoestore.firebaseapp.com",
  projectId: "ie303-shoestore",
  storageBucket: "ie303-shoestore.appspot.com",
  messagingSenderId: "159891293657",
  appId: "1:159891293657:web:a2c8c95974c8a8be0f05c8",
  measurementId: "G-WBDCY00928"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)