import React, { useState, useEffect} from "react";

const registerNewUser = () => {
    let [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
   
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name

        setUserInfo((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
        console.log(userInfo);
   }

   const postNewUser = async (event) => {
    event.preventDefault();
        try{
                const response = await fetch ('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: `${userInfo.username}`,
                        password: `${userInfo.password}`
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
        <form 
        className="registerForm"
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
            <button onClick={postNewUser}>Click here to register</button>             
        </form>
    </>
}

export default registerNewUser;