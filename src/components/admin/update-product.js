
import axios from "axios";
import { useRef, useState } from "react"
    
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
    
            <>
            <br></br>
            <br></br>
            <input placeholder="Enter your item id" ref={idInput}></input>
            <input placeholder="Enter your item name" ref={itemNameInput}></input>
            <input placeholder="Enter your item cost" ref={costInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter your item weight" ref={weightInput}></input>
            <input placeholder="Enter your item volume" ref={volumeInput}></input>
            <input placeholder="Is your item frozen" ref={frozenInput}></input>
    
            <br></br>
            <br></br>
            <button onClick={UpdateProduct}>Update</button>
            </>
        );
       
    }