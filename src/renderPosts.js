import React from "react";

const RenderPosts = (props) => {

    return (
        <>
            {
                //renders posts with message or delete buttons depending on author username
                props.isLoggedIn === true ?
                props.userPosts.map((post, index) => {
                    return <div id="singlePost" key={post.id}>
                        <h2>{post.title}</h2>
                        <span>
                            <h4>{post.price}</h4>
                            <h5>{post.author.username}</h5>
                        </span>
                        {
                         props.currentUsername === post.author.username ?
                         <button>delete</button> :   
                         <button>message</button>                   
                        }
                    </div>
                })    :
                props.userPosts.map((post, index) => {
                    return <div id="singlePost" key={post.id}>
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