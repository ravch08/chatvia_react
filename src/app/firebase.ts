import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsmcvXm8lrFyrNnISOvAd3-FDeb9EglBU",
  authDomain: "chatvia-812f4.firebaseapp.com",
  projectId: "chatvia-812f4",
  storageBucket: "chatvia-812f4.appspot.com",
  messagingSenderId: "532651657693",
  appId: "1:532651657693:web:95093d7faf4c9678974e34",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
