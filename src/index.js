import React, { useState, useEffect} from "react";
import { createRoot } from 'react-dom/client';
import RenderPosts from "./renderPosts";
import RegisterNewUser from './registerNewUser.js';
import Header from "./header.js";

const appElement = document.getElementById("root");

const root = createRoot(appElement);


const App = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


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
        <RegisterNewUser />     
    </>
}

root.render(<App />)