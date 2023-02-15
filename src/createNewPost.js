import React, { useState, useEffect} from "react";

const CreateNewPost = (props) => {
    let [postInfo, setPostInfo] = useState({
        title: "",
        description: "",
        price: "",
        location: ""
    })

    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;

        setPostInfo((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })       
   }

   const submitNewPost = async (event) =>{
        event.preventDefault();
        try{ 
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.userToken}`
                },
                body: JSON.stringify({
                   post: {
                    title: postInfo.title,
                    description: postInfo.description,
                    location: postInfo.location,
                    price: postInfo.price,
                    willDeliver: true
                   }
                })
            });
            const result = await response.json();
            if(result.error){
                throw result.error;
            }
            console.log(`create post result: ${result}`)
        }catch(err){
            console.error(err);
        }
   }

    return <>
    <h3>Create New Post</h3>
        <form
        className="newPostForm"
        >
            <label>
                Title:
                <input
                type="text"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                ></input>
            </label>
            <label>
                Description:
                <input
                type="text"
                placeholder="What is this item?"
                onChange={handleChange}
                name="description"
                ></input>
            </label>
            <label>
                Price:
                <input
                type="text"
                placeholder="How much?"
                onChange={handleChange}
                name="price"></input>
            </label>
            <label>
                Location:
                <input
                type="text"
                placeholder="Where is it?"
                onChange={handleChange}
                name="location"></input>
            </label>
            <button onClick={submitNewPost}>Create Post!</button>
        </form>
    </>
}

export default CreateNewPost;