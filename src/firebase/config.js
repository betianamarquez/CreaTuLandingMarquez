import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADrOl8-aqlsCZ7PrV3Z4Qv4DpnlvRjL4A",
  authDomain: "urban-import.firebaseapp.com",
  projectId: "urban-import",
  storageBucket: "urban-import.firebasestorage.app",
  messagingSenderId: "360955201265",
  appId: "1:360955201265:web:9e3e9ce53a61c8f7670b50",
  measurementId: "G-5FCBGW43C3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);