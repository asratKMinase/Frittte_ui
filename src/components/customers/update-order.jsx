import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";

export default function UpdateOrder() {

    const url = "https://frittte.azurewebsites.net";

    const [user, setUser] = useContext(userContext);

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
            alert(error.response.data);    
        }
    }

    return (
        <>
                <h4>Please Update your order below.</h4>
                <input placeholder="Enter id" ref={idInput}></input>
                <input placeholder="Enter order date" ref={orderDateInput}></input>
                <br></br>
                <br></br>
                <br></br>
                 <input placeholder="Enter item Name" ref={itemNameInput}></input>  
                <input placeholder="Enter your comment" ref={commentInput}></input>

                <button onClick={updateOrder}>Update Order</button> 

        </>
    );
}
