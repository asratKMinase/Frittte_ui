import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../Walmartlogo.jpg";

export default function AccountDelete() {
   
    const navigate = useNavigate();
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
        }
    }
    function toHome(){
        navigate("/")
    }
    return (
        <>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <center>
                <h4>You can delete your account here</h4>
                </center>
                </div>
                <center>
                <body className="body4">
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter your username" ref={usernameInput}></input>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => {register(); toHome()}}>Delete</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/customerdashboard")}>Back</Button>
                </body>
                </center>
        </>
    );
}
