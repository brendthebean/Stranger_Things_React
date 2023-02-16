import React from "react";
import { BrowserRouter, Route, Link, useNavigate } from 'react-router-dom';

const Header =(props) => {
    const navigate= useNavigate();
    return<>
        <h3>Stranger Things</h3>
        {
        props.isLoggedIn === false ?
        <button onClick={() => navigate("/login")}>Login</button> :
        <>
            <button onClick={() => navigate("")}>Logout</button>
            <button onClick={() => navigate("/messages")}>Messages</button>
        </>
        }           
    </>
}

export default Header;