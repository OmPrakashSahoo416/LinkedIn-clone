import {initializeApp} from 'firebase/app'
import {getFirestore, collection, onSnapshot, query} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsDQIJM6wiRSF7kXS-zo3b5dZomxFrIPs",
  authDomain: "linkedin-clone-c1c64.firebaseapp.com",
  projectId: "linkedin-clone-c1c64",
  storageBucket: "linkedin-clone-c1c64.appspot.com",
  messagingSenderId: "944862144258",
  appId: "1:944862144258:web:511d2b90c1908bfe75c41b",
  measurementId: "G-4EQVEN5BGD"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};