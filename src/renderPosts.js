import React from "react";

const RenderPosts = (props) => {

    return (
        <>
        {props.userPosts.map((post, index) => {
            return <div id="singlePost" key={post.id}>
                <h2>{post.title}</h2>
                <span>
                    <h4>{post.price}</h4>
                    <h5>{post.author.username}</h5>
                </span>
            </div>
        })}
        </>
    )
}

export default RenderPosts;