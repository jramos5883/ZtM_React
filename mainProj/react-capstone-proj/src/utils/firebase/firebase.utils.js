import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwEYU3E0wjvg3H_48Ta3HkXQZrMOpfco",
  authDomain: "react-capstone-proj-db.firebaseapp.com",
  projectId: "react-capstone-proj-db",
  storageBucket: "react-capstone-proj-db.appspot.com",
  messagingSenderId: "980803834555",
  appId: "1:980803834555:web:ef62b96d105bf2f4d78f9e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
