import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDJXOX82YIy7BcTTrzoElnQxAagNllx7Y",
  authDomain: "rural-ai-ai-powered-solutions.firebaseapp.com",
  projectId: "rural-ai-ai-powered-solutions",
  storageBucket: "rural-ai-ai-powered-solutions.firebasestorage.app",
  messagingSenderId: "220191135887",
  appId: "1:220191135887:web:dbfcb42731ac72aa3d38fa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
