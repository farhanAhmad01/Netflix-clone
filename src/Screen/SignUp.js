import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (err) {
      console.log("err", err);
    }
console.log("email and pass",email,password)

  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "2rem" }}>Sign in</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        // noValidate
        autoComplete="off"
      >
        <TextField
          style={{
            marginBottom: "1rem",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          value={email}
        onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          InputProps={{
            style: { color: "black", fontWeight: "bold", fontSize: "1.2rem" },
            autoComplete: "email",
          }}
        />
        <TextField
          style={{
            marginBottom: "1rem",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          placeholder="Password"
          value={password}
        onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"} // Toggle password visibility based on state
          required
          InputProps={{
            style: { color: "black", fontWeight: "bold", fontSize: "1.2rem" },
            autoComplete: "new-password",
            endAdornment: (
              <IconButton
                onClick={togglePasswordVisibility}
                edge="end"
                size="large"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <Button
          style={{
            backgroundColor: "#e50914",
            color: "white",
            width: "300px",
            fontSize: "1.2rem",
          }}
          variant="contained"
          size="large"
          onClick={signin}
        >
          Sign in
        </Button>
        <div style={{ marginTop: "1rem", color: "#999", fontSize: "1rem" }}>
          <span
            style={{
              color: "#999",
              textDecoration: "none",
              marginRight: "0.5rem",
            }}
          >
            New to Netflix?
          </span>
          <span
            style={{
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "1.1rem",
              borderBottom: "1px solid transparent",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
            onClick={register}
          >
            Sign up now
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
