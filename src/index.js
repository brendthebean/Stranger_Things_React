import React, { useState, useEffect} from "react";
import { createRoot } from 'react-dom/client';
import RenderPosts from "./renderPosts";
import RegisterNewUser from './registerNewUser.js';
import LogInPage from "./logInPage";
import CreateNewPost from "./createNewPost";
import Header from "./header.js";

const appElement = document.getElementById("root");

const root = createRoot(appElement);


const App = () => {
    const[userPosts, setUserPosts] = useState([]);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[userToken, setUserToken] = useState("");


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const data = await response.json();
            setUserPosts(data.data.posts);            
        }
        fetchPosts();
    }, [])
    
    return <>        
        <RenderPosts userPosts={userPosts}/>  
        <RegisterNewUser />'
        <LogInPage 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn} 
            userToken = {userToken}
            setUserToken = {setUserToken}
        /> 
        <CreateNewPost />    
    </>
}

root.render(<App />)