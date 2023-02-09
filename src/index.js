import React, { useState, useEffect} from "react";
import { createRoot } from 'react-dom/client';
import RenderPosts from "./renderPosts";
import Header from "./header.js";

const appElement = document.getElementById("root");

const root = createRoot(appElement);


const App = () => {
    const [userPosts, setUserPosts] = useState([]);
    console.log('posts: ', userPosts);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const data = await response.json();
            setUserPosts(data.data.posts);            
        }
        fetchPosts();
    }, [])
    
    return <>
        <Header />
        <RenderPosts userPosts={userPosts}/>       
    </>
}

root.render(<App />)