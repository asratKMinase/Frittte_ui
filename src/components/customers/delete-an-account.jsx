import axios from "axios";
import { useRef } from "react";

export default function AccountDelete() {
   
    const url = "https://frittte.azurewebsites.net/customer/delete?username=";
    
    const usernameInput = useRef();
 
    async function register() {
       
        const user = {
            username: usernameInput.current.value,
          
             
    };
        try {
            const response = await axios.delete(`${url}${usernameInput.current.value}`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can delete your account here</h4>
                <input placeholder="Enter your username" ref={usernameInput}></input>
              
                            
                <button onClick={register}>Delete</button>
        </>
    );
}
