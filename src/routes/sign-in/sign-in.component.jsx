import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from 'react'
import { getRedirectResult } from "firebase/auth"

const SignIn = () => {
    //run this useEffect once when the component first-time mounted
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        // console.log(response);
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
        </div>
    )
}

export default SignIn