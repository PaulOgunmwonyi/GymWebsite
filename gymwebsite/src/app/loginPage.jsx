import React, { useState } from "react";
import Link from "next/link";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [passWord, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={passWord} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <li><Link href="/login" className='LoginButton'>
                    <button onClick={() => props.onFormSwitch('header')}>Log In</button>
                </Link></li>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}