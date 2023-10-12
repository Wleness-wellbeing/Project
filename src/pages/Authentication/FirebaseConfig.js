import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeaaFJF6R0KC7UsWZOrr0x4JhHeSO-7aw",
  authDomain: "wleness-84739.firebaseapp.com",
  projectId: "wleness-84739",
  storageBucket: "wleness-84739.appspot.com",
  messagingSenderId: "584754703541",
  appId: "1:584754703541:web:c6dc3ac065e7d840f3a2fc",
  measurementId: "G-4SYTVTV84N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// const provider=new GoogleAuthProvider();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
