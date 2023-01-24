import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'

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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInput type="text" label="Display Name" required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label="Email" required onChange={handleChange} name='email' value={email} />
                <FormInput label="Password" required onChange={handleChange} name='password' value={password} />
                <FormInput label="Confirm Password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button buttonType='google' type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm