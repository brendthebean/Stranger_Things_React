import React, { useState, useEffect} from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RenderPosts from "./renderPosts";
import RegisterNewUser from './registerNewUser.js';
import LogInPage from "./logInPage";
import CreateNewPost from "./createNewPost";
import Header from "./header.js";
import Messages from "./messages";

const appElement = document.getElementById("root");

const root = createRoot(appElement);


const App = () => {

    const[userPosts, setUserPosts] = useState([]);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[userToken, setUserToken] = useState("");
    const[currentUsername, setCurrentUsername] = useState("");
    const[path, setPath] = useState("");


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const data = await response.json();
            setUserPosts(data.data.posts);            
        }
        fetchPosts();
    }, [])
    
    return (
        <BrowserRouter>
            <div id="app">
                <Routes>
                    <Route exact path="/" element={
                        <div id="homepage">
                            <Header 
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setCurrentUsername={setCurrentUsername}
                            />
                            <RenderPosts
                                isLoggedIn = {isLoggedIn}
                                userToken = {userToken} 
                                userPosts = {userPosts}
                                currentUsername = {currentUsername}
                            />
                            {isLoggedIn === false ?
                            <RegisterNewUser />                  :
                            <CreateNewPost userToken={userToken}/>   
                            }  
                            
                        </div>
                    }></Route>
                    <Route exact path="/login" element={
                        <>
                            <Header 
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            setCurrentUsername={setCurrentUsername}
                            />
                           <LogInPage 
                           isLoggedIn = {isLoggedIn} 
                           setIsLoggedIn = {setIsLoggedIn} 
                           userToken = {userToken}
                           setUserToken = {setUserToken}
                           currentUsername = {currentUsername}
                           setCurrentUsername = {setCurrentUsername}
                           path={path}
                           setPath={setPath} 
                            />
                       </>
                    }></Route>
                    <Route exact path="/messages" element={
                        <>
                            <Header 
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            setCurrentUsername={setCurrentUsername}
                            />
                            <Messages 
                                userToken = {userToken}
                            />
                        </>
                    }>
                    </Route>
                </Routes> 
                 
            </div>
        </BrowserRouter>
    )
}

root.render(<App />)