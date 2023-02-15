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
    const[path, setPath] = useState('/');
    const[userPosts, setUserPosts] = useState([]);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[userToken, setUserToken] = useState("");
    const[currentUsername, setCurrentUsername] = useState("");


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const data = await response.json();
            setUserPosts(data.data.posts);            
        }
        fetchPosts();
    }, [])
    
    return <>
        <Header 
            isLoggedIn={isLoggedIn} 
            path ={path}
        />        
        <RenderPosts
            isLoggedIn = {isLoggedIn}
            userToken = {userToken} 
            userPosts = {userPosts}
            currentUsername = {currentUsername}
        />  
        <RegisterNewUser />
        <LogInPage 
            isLoggedIn = {isLoggedIn} 
            setIsLoggedIn = {setIsLoggedIn} 
            userToken = {userToken}
            setUserToken = {setUserToken}
            currentUsername = {currentUsername}
            setCurrentUsername = {setCurrentUsername}
        /> 
        <CreateNewPost userToken={userToken}/>    
    </>
}

root.render(<App />)