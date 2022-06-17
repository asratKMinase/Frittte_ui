import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";

export default function CrdeiteCardRegister() {

    const url = "https://frittte.azurewebsites.net";

    const [user] = useContext(userContext);

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
            alert(error.response.data);
           
        }
    }

    return (
        <>
                <div className="header">
                <h4>Please register below.</h4>
                </div>
                <center>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter name on the credit card number" ref={creditCradNameInput}></input>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter CVV from the backend of the card" ref={cvvInput}></input>
                <br></br>
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter expiration date" ref={expDateInput}></input>
                <br></br>               
                <br></br>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter the limit on the card" ref={limitInput}></input>
                <br></br>                   
                <br></br>
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={register}>Add Credit Card</Button> 
                </center>
        </>
    );
}
