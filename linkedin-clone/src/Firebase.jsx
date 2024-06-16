import firebase from 'firebase';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsDQIJM6wiRSF7kXS-zo3b5dZomxFrIPs",
  authDomain: "linkedin-clone-c1c64.firebaseapp.com",
  projectId: "linkedin-clone-c1c64",
  storageBucket: "linkedin-clone-c1c64.appspot.com",
  messagingSenderId: "944862144258",
  appId: "1:944862144258:web:511d2b90c1908bfe75c41b",
  measurementId: "G-4EQVEN5BGD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

//add this line in codes where you need it =>
// import firebase from "./Firebase.jsx"


