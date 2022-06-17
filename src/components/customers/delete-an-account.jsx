import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";

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
                <div className="header">
                <h4>You can delete your account here</h4>
                </div>
                <center>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Enter your username" ref={usernameInput}></input>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={register}>Delete</Button>
                </center>
        </>
    );
}
