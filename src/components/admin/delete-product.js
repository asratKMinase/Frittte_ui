import { useRef } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";


export default function DeleteProduct() {

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
    alert(error.response.data);
    }

    }
    return(

        <>
         <center>
             <div class="header2">
             <img src={Logo} alt="Logo"></img>
            
            <br></br>
            
            <h2> Hello FRITTTE Admin!. Welcome to your Dashboard</h2>
            </div>
            <body className="body4">
                <h4>You can delete any item here</h4>
                <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter item name" ref={itemNameInput}></input>
                <br></br>
                            
                <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={deletingProduct}>Delete</Button>
            </body>    
            </center>
        </>
    );
   
}