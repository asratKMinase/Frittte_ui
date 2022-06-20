import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../Walmartlogo.jpg";


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
        }
    }

    function toDash(){
        navigate("/customerdashboard")
    }

    return (
        <>
                <center>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <center>
                <h4>You can update your account here.</h4>
                </center>
                </div>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter your username" ref={usernameInput}></input>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter First Name" ref={fnameInput}></input>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter Last Name" ref={lnameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter your dob" ref={dobInput}></input>
                <br></br>                   
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => {register(); toDash();}}>Update Account</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/customerdashboard")}>Back</Button>
                </center> 
        </>
    );
}
