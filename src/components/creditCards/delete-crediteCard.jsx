import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";

export default function CrdeiteCardRegister() {

    const url = "https://frittte.azurewebsites.net";

    const [user, setUser] = useContext(userContext);

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
                <h4>You can delete your Credit Card here.</h4>
                <input type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                {/* <input placeholder="Enter name on the credit card number" ref={creditCradNameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter CVV from the backend of the card" ref={cvvInput}></input>
                <input placeholder="Enter expiration date" ref={expDateInput}></input>
                <br></br>               
                <br></br>
                <br></br>
                <input placeholder="Enter the limit on the card" ref={limitInput}></input> */}
                <br></br>                   
                <br></br>
                <button onClick={deleteCC}>Delete Credit Card</button> 

        </>
    );
}
