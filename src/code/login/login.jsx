import React from 'react';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import './login.scss';

const Login = () => (
    <div className='sign-in-and-sign-up'>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    </div>
);

export default Login;