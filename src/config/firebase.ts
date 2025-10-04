import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWYKiwdPAmP16DMCw8wOWKsKoG6JrWvsk",
  authDomain: "dinesh-reddy-pg.firebaseapp.com",
  projectId: "dinesh-reddy-pg",
  storageBucket: "dinesh-reddy-pg.firebasestorage.app",
  messagingSenderId: "623543442755",
  appId: "1:623543442755:web:1e767598534c1e3b5c63f6",
  measurementId: "G-HQT793RLPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
