import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../Walmartlogo.jpg";


export default function AccountRegister() {
  

    const navigate = useNavigate();
  

    const url = "https://frittte.azurewebsites.net";

    

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
            const response = await axios.post(`${url}/customer/register`, user);
            console.log(response.data);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    function toLogin(){
        navigate("/login")
    }

    return (
        <>
               
                <center>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <h3><center>Please register Below......</center></h3>
                
                 </div>
                    <body className="body4">
                <input TextField  className="p3" id="inputID" style ={{width: '15%' , borderWidth: 7, borderColor:"grey", background:"lightBlue"}} placeholder="Enter your username" ref={usernameInput}></input>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 7, borderColor:"grey", background:"lightBlue"}} type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 7, borderColor:"grey", background:"lightBlue"}} placeholder="Enter First Name" ref={fnameInput}></input>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 7, borderColor:"grey", background:"lightBlue"}} placeholder="Enter Last Name" ref={lnameInput}></input>
                <br></br>               
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 7, borderColor:"grey", background:"lightBlue"}} placeholder="Enter your dob" ref={dobInput}></input>
                <br></br>                   
                <br></br>
                <Button  style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }}  variant="contained" sx={{color:'#FDBB2F'}} onClick={() => {register(); toLogin()}}>Add Account</Button>
                </body>
                </center>
        </>
    );
}
