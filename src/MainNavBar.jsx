import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./Frittte.jpg"
import Logo from "./WalmartlogoResized.jpg";

export default function MainNavBar(){
    const navigate = useNavigate();

    return(
       
        <nav>
           
             <div class="header">
             <img src={Logo} alt="Logo"></img>
            <h1>Welcome to FRITTTE</h1>
            </div>
            <center>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Sign Up</Button>
            <Button onClick={() => navigate("/Food-Items")}>View all Food Items</Button>
            <img src={Image}></img>
            </center>
        </nav>
    )
}