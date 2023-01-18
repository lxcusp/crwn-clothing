// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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
export const db = getFirestore(); 
// allows us now to tell Firebase when we want to get a document or we want
// to set a document or anything like that related to our database.
// This is the database that we're going to pass because this(db) actually 
// directly points to our database inside of the console.

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    //tried to see if the user is existed in the DB or not. 
}