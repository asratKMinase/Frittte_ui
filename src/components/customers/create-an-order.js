import axios from "axios";
import { useRef, useContext } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";
import { useNavigate } from "react-router-dom";

export default function UpdateOrder() {

    const [user] = useContext(userContext);

    const navigate = useNavigate();
    
    
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
        }
    }

    return (
        <>
            <div className="header">
            <img src={Logo} alt="Logo"></img>
            <center>
            <h4>Order an item</h4>
            </center>
            </div>
            <center>
            <body className="body4">
            <br></br>
            <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Order Date" ref={input1}></input>
            <br></br>
            <br></br>
            <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Item name" ref={input2}></input>
            <br></br>
            <br></br>
            <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Comment" ref={input3}></input>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={CreateOrder}>Order</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/customerdashboard")}>Back</Button>
            </body>
            </center>

 
        </>
    )
}