import React from "react";
import { BrowserRouter, Route, Link, useNavigate } from 'react-router-dom';

const Header =(props) => {
    const navigate= useNavigate();
    
    const logUserOut = () => {
        navigate("/");
        props.setIsLoggedIn(false);
        props.setCurrentUsername("");
        }    
    return<>
        <h3>Stranger Things</h3>
        {
        props.isLoggedIn === false ?
        <>
        <button onClick={() => {navigate("/login")}}>Login</button>
        <button onClick={() => {navigate("/")}}>Home</button>
        </> :
        <>
            <button onClick={logUserOut}>Logout</button>
            <button onClick={() => { navigate("/messages")}}>Messages</button>
            <button onClick={() => {navigate("/")}}>Home</button>
        </>
        }           
    </>
}

export default Header;