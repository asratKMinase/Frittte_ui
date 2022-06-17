import axios from "axios";
import { useRef } from "react";
import { Button } from "@mui/material";

export default function Payment() {
  

    const url = "https://frittte.azurewebsites.net";
    

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
                <h4>You can pay your balance here here.</h4>
                </div>
                <br></br>
                <center>
                <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Enter your credit card number" ref={creditCardInput}></input>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Enter your payment amount" ref={paymentInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={paynow}>Pay now</Button>
                </center>
               
        </>
    );
}
