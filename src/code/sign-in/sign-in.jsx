import React from 'react';
import './sign-in.scss';
import CustomButton from '../forms/custom-button/custom-button';
import FormInput from '../forms/form-input/form-input';

import { signInWithGoogle } from '../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        
        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;