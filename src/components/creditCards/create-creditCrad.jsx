import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";
import { useNavigate } from "react-router-dom";

export default function CrdeiteCardRegister() {

    const url = "https://frittte.azurewebsites.net";

    const [user] = useContext(userContext);

    const navigate = useNavigate();

    const creditCardInput = useRef();
    const creditCradNameInput  = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const limitInput = useRef();

    async function register() {
    console.log(user.username)

        const userCC = {

            creditCardNumber: creditCardInput.current.value,
            creditCardName: creditCradNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            limit: limitInput.current.value,

            customerUsername: user.username,  

    };

        try {
                          
            const response = await axios.post(`${url}/addCreditCard`, userCC);
            
        } catch (error) {
            console.error(error.response.data);
           
        }
    }

    return (
        <>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <center>
                <h4>Please register below.</h4>
                </center>
                </div>
                <center>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "500px"}} type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "500px"}} placeholder="Enter name on the credit card number" ref={creditCradNameInput}></input>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "500px"}} placeholder="Enter CVV from the back of the card" ref={cvvInput}></input>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "500px"}} placeholder="Enter expiration date" ref={expDateInput}></input>
                <br></br>               
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "500px" }} placeholder="Enter the limit on the card" ref={limitInput}></input>
                <br></br>                   
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" sx={{color:'#FDBB2F'}} onClick={register}>Add Credit Card</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/creditcarddashboard")}>Back</Button> 
                </center>
        </>
    );
}
