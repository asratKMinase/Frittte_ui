import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";
import { useNavigate } from "react-router-dom";

export default function UpdateOrder() {

    const url = "https://frittte.azurewebsites.net";

    const [user] = useContext(userContext);

    const navigate = useNavigate();

    const idInput = useRef();
    const orderDateInput  = useRef();
    const itemNameInput = useRef();
    const usernameInput = useRef();
    const commentInput = useRef();
    
    
    async function updateOrder() {
   
    const responseCheck = await axios.get(`${url}/findAllMyOrders/${user.username}`)
    console.log(responseCheck.data[0].itemName);
    console.log(1)

    const getResponse = await axios.get(`${url}/customer/findCustomer?id=${user.username}`)
    console.log(getResponse.data.username)
    console.log(getResponse.data)
    console.log(222222)

        const userOrderUpdate = {

            id: idInput.current.value,
            orderDate: orderDateInput.current.value,
            itemName: itemNameInput.current.value,
            customerUsername:user.username,
            comment: commentInput.current.value,
    };

        try {

            console.log(userOrderUpdate)
            const response = await axios.put(`${url}/updateOrder`, userOrderUpdate);
            console.log(response.data)
            console.log(3333)
            
        } catch (error) {
            console.error(error);
   
        }
    }

    return (
        <>
                <div className="header">
                <img src={Logo} alt="Logo"></img>
                <center>
                <h4>Please Update your order below.</h4>
                </center>
                </div>
                <center>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter id" ref={idInput}></input>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter order date" ref={orderDateInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter item Name" ref={itemNameInput}></input>
                <br></br>  
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter your comment" ref={commentInput}></input>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={updateOrder}>Update Order</Button>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={() => navigate("/customerdashboard")}>Back</Button> 
                </center>

        </>
    );
}
