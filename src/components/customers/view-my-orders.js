import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../App";
import Paper from '@mui/material/Paper';
import Logo from "../../Walmartlogo.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { width } from "@mui/system";


export default function ViewMyOrders() {

    const [user] = useContext(userContext);
    
    const navigate = useNavigate();

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
            <img src={Logo} alt="Logo"></img>
            <center>
            <h3>Your orders</h3>
            <Button style={{borderRadius: 15, backgroundColor: "#FDBB2F", padding: "18px 36px",fontSize: "18px", color:"#0D7AB2"}} variant="contained" onClick={() => navigate("/customerdashboard")}>To Dashboard</Button>
            </center>
            </div>
            <center>
            <body className="body4">
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
            </body>
            </center>
        </>
    )
}