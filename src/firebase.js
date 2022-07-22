import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC1axCezYthU14AVkCkczZEtSqC747dFCc",
    authDomain: "webp-bcf28.firebaseapp.com",
    projectId: "webp-bcf28",
    storageBucket: "webp-bcf28.appspot.com",
    messagingSenderId: "231870518081",
    appId: "1:231870518081:web:aceaaeb00d4fb5adec87c0",
    measurementId: "G-2HH4W70CMH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;