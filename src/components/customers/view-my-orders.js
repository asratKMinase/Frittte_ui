import { useState, useEffect, useContext } from "react";
import { userContext } from "../../App";


export default function ViewMyOrders() {

    const [user, setUser] = useContext(userContext);
    
    const [body, setBody] = useState([]);

    useEffect(() => {
        display();
    }, []);

    async function display() {

        

        try {
            
            const response = await fetch(`https://frittte.azurewebsites.net/findAllMyOrders/${user.username}`);
            const myOrders = await response.json();
            const myOrdersRows = myOrders.map((e) => {
                return (
                    <tr>
                        <td>{e.itemName.itemName}</td>
                        <td>{e.orderDate}</td>
                        <td>{e.comment}</td>
                    </tr>
                );
            });
            console.log(myOrders);
            setBody(myOrdersRows);
        } catch (e) {
            console.error(e);

        }
    }
    return (
        <>
            <h3>Your orders</h3>
            
            
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Order Date</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>{body}</tbody>
            </table>
            
        </>
    )
}