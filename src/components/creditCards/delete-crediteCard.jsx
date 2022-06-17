import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";

export default function CrdeiteCardRegister() {

    const url = "https://frittte.azurewebsites.net";

    const [user] = useContext(userContext);

    const creditCardInput = useRef()

    async function deleteCC() {
    // console.log(creditCardInput.current.value)
    // console.log(user.username)
    
    
        const userCC = {

            creditCardNumber: creditCardInput.current.value,
            customerUsername: user.username,  
    };

        try {
            const responseCheck = await axios.get(`${url}/findCard?findCreditCard=${creditCardInput.current.value}`)
            const checkCard = creditCardInput.current.value
            console.log(responseCheck.data.creditCardNumber)
            console.log(checkCard)

            if(checkCard === responseCheck.data.creditCardNumber){
                const response = await axios.delete(`${url}/deleteCreditCard?deletedCreditCard=${creditCardInput.current.value}`, userCC)
            }else if(responseCheck.data.creditCardNumber===null){
                alert("Credit Card is already deleted")
                console.log(responseCheck)
            }

                          
            } catch (error) {
            
            alert(creditCardInput.current.value);
        }
    }

    return (
        <>
                <div className="header">
                <h4>You can delete your Credit Card here.</h4>
                </div>
                <br></br>
                <center>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                <br></br>                   
                <br></br>
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={deleteCC}>Delete Credit Card</Button> 
                </center>

        </>
    );
}
