import React, { useState } from "react";
const  users  = require('./data').users;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.email === email && users.password === pass) {
            console.log('valid email or password');
            // window.location.href = '/home';
        } else {
            console.log('Invalid email or password');
        }

    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email ID" id="email" name="email" />

                <label for="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <div class="wrap-login100-form-btn">
                    <button class="login100-form-btn">
                        Login
                    </button>
                </div>


            </form>
        </div>
    )
}
export default LoginForm;