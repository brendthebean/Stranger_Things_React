import React, { useState } from "react";

const RenderPosts = (props) => {
    const[postToDelete, setPostToDelete] = useState("");

    const deletePost = async (event) => {
        event.preventDefault();
        console.log(event.target.name);
        try{
            const response = await fetch (`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${event.target.name}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.userToken}`
                }
            });
            const result = await response.json();
            if(result.error){
                throw result.error;
            }
            console.log(`post has been deleted ${result}`)
        }catch(err){
            console.error(err);
        }
    }

    return (       
        <>
            {
                //renders posts with message or delete buttons depending on author username
                props.isLoggedIn === true ?
                props.userPosts.map((post, index) => {
                    return <div id="singlePost" key={post._id}>
                        <h2>{post.title}</h2>
                        <span>
                            <h4>{post.price}</h4>
                            <h5>{post.author.username}</h5>
                        </span>
                        {
                         props.currentUsername === post.author.username ?
                         <button onClick={deletePost} id={index} name={post._id}>delete</button> :   
                         <button>message</button>                   
                        }
                    </div>
                })    :
                props.userPosts.map((post, index) => {
                    return <div id="singlePost" key={post._id}>
                        <h2>{post.title}</h2>
                        <span>
                            <h4>{post.price}</h4>
                            <h5>{post.author.username}</h5>
                        </span>
                    </div>
                })
            } 
        </>
    )
}

export default RenderPosts;