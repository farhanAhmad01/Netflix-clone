import React,{useState,useEffect} from "react";
import './Nav.css';
import { auth } from "../firebase";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false);
      }
      return  () => {
        window.removeEventListener('scroll');
      }
    })
  }, [])

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <>
      <div className={`nav ? ${show && 'navBlack'}`}>
        <img className="navLogo" src="logo.png" alt="logo" />
        <button className="loginbtn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Nav;
