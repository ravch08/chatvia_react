import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3kbeZn7Lc2kHDnwT1pV0xeZbBuXz0Jkw",
  authDomain: "chavia-v2.firebaseapp.com",
  projectId: "chavia-v2",
  storageBucket: "chavia-v2.appspot.com",
  messagingSenderId: "234733179837",
  appId: "1:234733179837:web:9ba72ce61f34266281b8d4",
  measurementId: "G-G00W80G4T5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
