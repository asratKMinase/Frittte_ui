import { useRef } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";
import { useNavigate } from "react-router-dom";


export default function DeleteProduct() {

    const navigate = useNavigate();

    const url = "https://frittte.azurewebsites.net";
    const itemNameInput = useRef();

    async function deletingProduct(){

        const product = itemNameInput.current.value
        
      console.log(product);
      console.log(2222);
    
    try {
    const response = await axios.delete(`${url}/deleteFoodItem?id=${product}`);
    console.log(response.data);
    } catch (error) {
    console.error(error.response.data);
    }

    }
    return(

        <>
         <center>
             <div class="header">
             <img src={Logo} alt="Logo"></img>
            
            <br></br>
            <center>
            <h3> Hello FRITTTE Admin!. Welcome to your Dashboard</h3>
            </center>
            </div>
            <body className="body4">
                <br></br>
                <h3>You can delete any item here</h3>
                <br></br>
                <input TextField className="p3" id="inputID" style ={{width: '15%' , borderWidth: 10, borderColor:"gray",color:"black", background:"lightBlue"}} placeholder="Enter item name" ref={itemNameInput}></input>
                <br></br>
                <br></br>           
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained" onClick={deletingProduct}>Delete</Button>
                <br></br>
                <br></br>
                <br></br>
                <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px", color:"#FDBB2F"}} variant="contained"  onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            </body>    
            </center>
        </>
    );
   
}