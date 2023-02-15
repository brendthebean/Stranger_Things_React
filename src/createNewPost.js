import React, { useState, useEffect} from "react";

const CreateNewPost = () => {
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
        console.log(postInfo);
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
        </form>
    </>
}

export default CreateNewPost;