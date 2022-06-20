import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CrdeiteCardRegister() {

    const url = "https://frittte.azurewebsites.net";

    const [user] = useContext(userContext);

    const navigate = useNavigate();

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
                console.log(error)
        }
    }

    return (
        <>
                <div className="header">
                <h4>You can delete your Credit Card here.</h4>
                </div>
                <br></br>
                <center>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue" ,width: "400px" }} placeholder="Enter credit card number" ref={creditCardInput}></input>
                <br></br>                   
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={deleteCC}>Delete Credit Card</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/creditcarddashboard")}>Back</Button> 
                </center>

        </>
    );
}
