import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCQjZRZYcr0_VtZgnOkD5tGIX5QM__A6Fc",
  authDomain: "wlen-demo.firebaseapp.com",
  projectId: "wlen-demo",
  storageBucket: "wlen-demo.appspot.com",
  messagingSenderId: "212139102976",
  appId: "1:212139102976:web:a472c8538fa2f5162199e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

// const provider=new GoogleAuthProvider();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export{auth,googleProvider,facebookProvider}