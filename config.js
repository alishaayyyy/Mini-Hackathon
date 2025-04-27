// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

      
import { getFirestore ,collection, addDoc,getDocs,doc, getDoc,query, where,updateDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAJStKITwY0GpNVwTiW1lWw27jO2eW5rug",
    authDomain: "hackathon-618ce.firebaseapp.com",
    projectId: "hackathon-618ce",
    storageBucket: "hackathon-618ce.firebasestorage.app",
    messagingSenderId: "141530719892",
    appId: "1:141530719892:web:96b73a0acd534cd139b681"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,signOut,sendPasswordResetEmail,db,addDoc ,collection, onAuthStateChanged,getDocs,doc, getDoc,query, where,updateDoc,deleteDoc}



