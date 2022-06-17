
import axios from "axios";
import { useRef, useState } from "react"
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";

    
export default function UpdateProduct() {
    
        const idInput = useRef();
        const itemNameInput = useRef();
        const costInput = useRef();
        const weightInput = useRef();
        const volumeInput = useRef();
        const frozenInput = useRef();
    
        const[food, setFood]  = useState(true);
        const url = "https://frittte.azurewebsites.net";
    
        async function UpdateProduct(){
            const updatedProduct = {
                id: idInput.current.value,
                itemName:itemNameInput.current.value,
                cost:costInput.current.value,
                weight:weightInput.current.value,
                volume:volumeInput.current.value,
                frozen:frozenInput.current.value,
            };
            try{
                await axios.put(`${url}/updateFoodItem`,updatedProduct);
                if (food === true){
                    setFood(false);
                } else {
                    setFood()
                }    
            } catch (error){
                console.error(error);
            }
        }
       
        return(
    
            <> <center>
            <div class="header2">
                 <img src={Logo} alt="Logo"></img>
                
                <br></br>
                
                <h2>Update your Product here</h2>
                </div>
                <body className="body4">
            <br></br>
            <br></br>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your item id" ref={idInput}></input>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your item name" ref={itemNameInput}></input>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your item cost" ref={costInput}></input>
            <br></br>
            <br></br>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your item weight" ref={weightInput}></input>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Enter your item volume" ref={volumeInput}></input>
            <input TextField style ={{width: '15%' , borderWidth: 1 }} placeholder="Is your item frozen" ref={frozenInput}></input>
    
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={UpdateProduct}>Update</Button>
            </body>
        </center>
            </>
        );
       
    }