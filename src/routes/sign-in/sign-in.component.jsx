import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from 'react'
import { getRedirectResult } from "firebase/auth"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        //signInWithGoogleRedirect will now take us into this separate 
        //page where we're asked to sign in with Google. Very similar 
        //to the pop up, except it's a separate page.
        console.log({ user });
        //the user is not getting console.log, but user is now in firebase's Authentication
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
        </div>
    )
}

export default SignIn