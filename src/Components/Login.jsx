import React, { useState } from "react";

export const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className="auth-form-container">
                <h2>Sign In</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input type="text" placeholder="username" id="username" name="username" required />
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder="youremail@email.com" id="email" name="email" required />
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="********" id="password" name="password" required />
                    <button className="signup-btn" type="submit">Sign In</button>
                </form>
                <a className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</a>
            </div>
        </>
    )
}
