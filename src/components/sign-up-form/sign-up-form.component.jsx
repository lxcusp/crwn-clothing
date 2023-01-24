import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(setFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("passwords do not match")
            return
        }
        try{
            // const response = await createAuthUserWithEmailAndPassword(email, password)
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            // console.log(response);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch(error){
            console.log(error);
            if(error.code === 'auth/email-already-in-use') {
                alert('This email is already in use, creation failed.')
            } else {
            console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">displayName</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName} />

                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email} />

                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password} />

                <label htmlFor="">Comfirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm