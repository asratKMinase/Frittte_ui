import axios from "axios";
import { useRef, useContext } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";

export default function UpdateOrder() {

    const [user] = useContext(userContext);
    
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    
    

    async function CreateOrder() {
        const item = {
            
        
            orderDate: input1.current.value,
            itemName: input2.current.value,
            comment: input3.current.value,
            customerUsername: user.username
        };

        try {

            const response = await axios.post("https://frittte.azurewebsites.net/order", item );
            
            console.log(response.data);
            
            
        } catch (error) {
            console.error(error);
            alert(error.response.data);
        }
    }

    return (
        <>
            <div className="header">
            <h4>Order an item</h4>
            </div>
            <center>
            <br></br>
            <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Order Date" ref={input1}></input>
            <br></br>
            <br></br>
            <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Item name" ref={input2}></input>
            <br></br>
            <br></br>
            <input TextField style ={{width: '15%' , borderWidth: 1}} placeholder="Comment" ref={input3}></input>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={CreateOrder}>Order</Button>
            </center>

 
        </>
    )
}