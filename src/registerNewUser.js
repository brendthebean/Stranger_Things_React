import React, { useState, useEffect} from "react";

const registerNewUser = () => {
    let [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
   
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;

        setUserInfo((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
   }

   const postNewUser = async (event) => {
        event.preventDefault();
        console.log(`registered username: ${userInfo.username} registered password: ${userInfo.password}`);
        try{
                const response = await fetch ('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: userInfo.username,
                        password: userInfo.password
                    }
                }),
            });
            const result = await response.json();
            if(result.error) {
                throw result.error;
            }
            console.log('POST result: ', result);
        }catch (err) {
            console.error(err);
        }

   }
    
    return<>
        <h3>Create New User</h3>
        <form 
        className="Form"
        >        
            <label>
                Username:
                <input 
                    type="text"
                    placeholder="Username" 
                    onChange={handleChange}
                    name="username"                   
                ></input>
            </label>
            <label>
                Password:
                <input 
                    type="text"
                    placeholder="Password"  
                    onChange={handleChange}
                    name="password"                  
                ></input>
            </label>
            <button class = "button" id="registerButton" onClick={postNewUser}>Click here to register</button>             
        </form>
    </>
}

export default registerNewUser;