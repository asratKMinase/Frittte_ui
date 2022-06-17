import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerLogin(){
    
    const navigate = useNavigate();
    const [user, setUser] = useContext(userContext);
    const usernameInput = useRef();
    const passwordInput = useRef();
    const url = "https://frittte.azurewebsites.net";
    
    async function Login(){
        
        const userInput = {
        username:usernameInput.current.value,
        password:passwordInput.current.value,   
        };
        try{
            const getResponse = await axios.get(`${url}/customer/findCustomer?id=${usernameInput.current.value}`)
        
            console.log(usernameInput.current.value)
            const response = await axios.post(`${url}/auth`, userInput)
            setUser({...user, username: userInput.username})
            
        if(getResponse.data.admin === true){
                navigate("/admindashboard");
        } else if(getResponse.data.admin === false){
                navigate("/customerdashboard");
               
            }
        } catch(error){
            console.log(error)
        }
    }
    
    
    
    
    
    return(
        <>
        <center>
           <div className="header">
             <h3>Please Login Below</h3>
            </div>
              <br></br>
                 <input TextField style ={{width: '15%' , borderWidth: 1}}  placeholder="Enter your Username" ref={usernameInput}></input>
              <br></br>
                 <input TextField style ={{width: '15%' , borderWidth: 1 }}  placeholder="Enter your Password" ref={passwordInput}></input> 
              <br></br>
               <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={Login} >Login</Button>
           
        
        </center>
        </>
    )
}