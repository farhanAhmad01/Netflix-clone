import React, { useState } from "react";
import "./LoginScreen.css";
import SignUp from "./SignUp";

const LoginScreen = () => {
  const [signIn,setSingIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img className="loginScreen-logo" src="logo.png" alt="not found" />
        <button className="loginbtn" onClick={() => setSingIn(true)}>
          Sign in
        </button>
        <div className="loginScreen-gradient"></div>
        <div className="loginScreen-body">
          {signIn ? (<SignUp/>):(
          <>
            <h1>Unlimited films, TV programs, show and much more.</h1>
            <h2>Watch AnyWhere. Cancel at any time</h2>
            <h3>Ready to Watch. Enter your email to get started</h3>
            <div className="loginScreen-input">
              <form>
                <input type="text" placeholder="Enter Email" />
                <button
                  className="loginScreen-getStarted"
                  onClick={() => setSingIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
