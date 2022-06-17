import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function AccountUpdate() {
  
    const navigate = useNavigate();

    const url = "https://frittte.azurewebsites.net/customer";
    

    const usernameInput = useRef();
    const passwordInput  = useRef();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const dobInput = useRef();
  
    async function register() {
        
        const user = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            dob: dobInput.current.value,
            employee: false,
            admin: false,
             
    };
        try {
            const response = await axios.put(`${url}/update`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    function toDash(){
        navigate("/customerdashboard")
    }

    return (
        <>
                <center>
                <div className="header">
                <h4>You can update your account here.</h4>
                </div>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your username" ref={usernameInput}></input>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter First Name" ref={fnameInput}></input>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter Last Name" ref={lnameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your dob" ref={dobInput}></input>
                <br></br>                   
                <br></br>
                <br></br>
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => {register(); toDash();}}>Update Account</Button>
                </center> 
        </>
    );
}
