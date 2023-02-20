import React, { useEffect, useState,  } from "react";

const Messages = (props) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/me', {
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${props.userToken}`
            },
            });
            const result = await response.json();
            if(result.error){
                throw result.error;
            }
            setMessages(result.data.messages);
        }catch(err) {
            console.error(err);
        } 
        }
        fetchMessages();
    }, [])

    return <>
        <h1>Messages</h1>
        {messages.map((message,index) => {
            return<>
                <div id="message" key={index}>
                    <h4>{message.fromUser.username}</h4>
                    <h6>{message.content}</h6>
                </div>
            </>     })}
    </>
}

export default Messages;