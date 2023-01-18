// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcsXzZYM9yh5BwnKsNEYQ4lZol8ZRWGJY",
  authDomain: "crwn-clothing-db-47fa5.firebaseapp.com",
  projectId: "crwn-clothing-db-47fa5",
  storageBucket: "crwn-clothing-db-47fa5.appspot.com",
  messagingSenderId: "699776591064",
  appId: "1:699776591064:web:a7d8950f4bc34f1acbe3ad"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);