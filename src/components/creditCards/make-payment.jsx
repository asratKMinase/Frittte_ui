import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../Walmartlogo.jpg";

export default function Payment() {
  

    const url = "https://frittte.azurewebsites.net";
    
    const navigate = useNavigate();

    const creditCardInput = useRef();
    const paymentInput = useRef();
    
  
    async function paynow() {

        const CCResponse = await axios.get(`${url}/findCard?findCreditCard=${creditCardInput.current.value}`)
        
        const user = {

           creditCardNumber: CCResponse.data.creditCardNumber,
           creditCardName: CCResponse.data.creditCardName,
           cvv: CCResponse.data.cvv,
           expDate: CCResponse.data.expDate,
           limit: CCResponse.data.limit - paymentInput.current.value,
           customerUsername: CCResponse.data.customerUsername,
              
         };
                
             
    
        try {
            const response = await axios.put(`${url}/updateLimit`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <center>
                <h4>You can pay your balance here here.</h4>
                </center>
                </div>
                <br></br>
                <center>
                <body className="body4">
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "400px"}} placeholder="Enter your credit card number" ref={creditCardInput}></input>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"  ,width: "400px"}} placeholder="Enter your payment amount" ref={paymentInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={paynow}>Pay now</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/customerdashboard")}>Back</Button>
                </body>
                </center>
               
        </>
    );
}
