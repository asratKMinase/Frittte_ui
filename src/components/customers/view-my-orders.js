import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../App";
import Paper from '@mui/material/Paper';


export default function ViewMyOrders() {

    const [user] = useContext(userContext);
    
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
                    <TableRow>
                        <TableCell align="center">{e.itemName.itemName}</TableCell>
                        <TableCell align="center">{e.orderDate}</TableCell>
                        <TableCell align="center">{e.comment}</TableCell>
                    </TableRow>
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
            <div className="header">
            <h3>Your orders</h3>
            </div>
            <center>
            <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor:'black', color: 'white' }} align="center">Item Name</TableCell>
                        <TableCell style={{backgroundColor:'black', color: 'white' }} align="center">Order Date</TableCell>
                        <TableCell style={{backgroundColor:'black', color: 'white' }} align="center">Comment</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>{body}</tbody>
            </Table>
            </TableContainer>
            </center>
        </>
    )
}