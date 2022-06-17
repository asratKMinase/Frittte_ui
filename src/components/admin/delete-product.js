import { useRef } from "react";
import axios from "axios";


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

        <> <center>
                <h4>You can delete any item here</h4>
                <input placeholder="Enter item name" ref={itemNameInput}></input>
              
                            
                <button onClick={deletingProduct}>Delete</button>
            </center>
        </>
    );
   
}