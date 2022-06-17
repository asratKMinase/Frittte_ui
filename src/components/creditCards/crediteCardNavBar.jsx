import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


export default function CreditCardNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
            <center>
            <h1>Manage Your CreditCard</h1> 
            <Button onClick={() => navigate("/addcreditecard")}>Add your Credit Card</Button>
            <Button onClick={() => navigate("/deletecreditecard")}>Delete Your Credit Card</Button>
            <Button onClick={() => navigate("/customerdashboard")}>Back to Your DashBoard</Button>
            </center>
        </nav>
    )
}