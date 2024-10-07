
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// Your Firebase configuration object from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDMrU5Yq7STMM0BL4V69q_QTImh-ZcZ_do",
  authDomain: "weatherportal-9525a.firebaseapp.com",
  projectId: "weatherportal-9525a",
  storageBucket: "weatherportal-9525a.appspot.com",
  messagingSenderId: "46761554241",
  appId: "1:46761554241:web:ec09da4cbb641c862f71c0",
  measurementId: "G-62NP1RZ6EH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);  // Initialize Realtime Database

export { auth, database };

