import React, { useState } from "react";
import { BrowserRouter, Route, Link, useNavigate } from 'react-router-dom';

const LogInPage = (props) => {
    const navigate = useNavigate();
    let [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;

        setUserInfo((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const logUserIn = async (event) => {
        event.preventDefault();
        console.log(`log in username: ${userInfo.username} log in password: ${userInfo.password}`);
        props.setCurrentUsername(userInfo.username);
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: userInfo.username,
                        password: userInfo.password
                    }
                }),
            });
            const result = await response.json();            
            if(result.error){
                throw result.error;
            }
            console.log('login result: ', result);
            props.setUserToken(result.data.token);
            props.setIsLoggedIn(true);
            navigate("/");
        }catch(err) {
            console.error(err);
        }
      
    }


    return <>
        <h3>Log In</h3>
        <form 
        className="logInForm"
        >        
            <label>
                Username:
                <input 
                    type="text"
                    placeholder="Username" 
                    onChange={handleChange}
                    name="username"                   
                ></input>
            </label>
            <label>
                Password:
                <input 
                    type="text"
                    placeholder="Password"  
                    onChange={handleChange}
                    name="password"                  
                ></input>
            </label>
            <button onClick={logUserIn}>Click here to Log in</button>             
        </form>
    </>
}

export default LogInPage;