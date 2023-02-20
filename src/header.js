import React from "react";
import { BrowserRouter, Route, Link, useNavigate } from 'react-router-dom';

const Header =(props) => {
    const navigate= useNavigate();
    
    const logUserOut = () => {
        navigate("/");
        props.setIsLoggedIn(false);
        props.setCurrentUsername("");
        }    
    return<div id = "Header">
        <h1>Stranger Things</h1>
        {
        props.isLoggedIn === false ?
        <>
        <button class="button" onClick={() => {navigate("/login")}}>Login</button>
        <button class="button"  onClick={() => {navigate("/")}}>Home</button>
        </> :
        <>
            <button class="button"  onClick={logUserOut}>Logout</button>
            <button class="button" onClick={() => { navigate("/messages")}}>Messages</button>
            <button class="button" onClick={() => {navigate("/")}}>Home</button>
        </>
        }           
    </div>
}

export default Header;