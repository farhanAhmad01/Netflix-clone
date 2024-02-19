import React, { useEffect, useState } from "react";
import Home from "./Screen/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Screen/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [user]);
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Home />}></Route>
      ) : (
        <Route path="/" element={<LoginScreen />} />
      )}
    </Routes>
  );
}

export default App;
