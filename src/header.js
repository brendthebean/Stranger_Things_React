import React from "react";

const Header =(props) => {
    return<>
        <h3>Stranger Things</h3>
        {
            props.isLoggedIn === false && props.path === '/' ?
                <button>Login</button> :
            <>
                <button>sign out</button>
                <button>return Home</button>
            </> 
        }        
        
        
    </>
}

export default Header;