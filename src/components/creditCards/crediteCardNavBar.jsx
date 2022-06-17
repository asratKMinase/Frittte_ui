import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Image from "../../disco2.jpg"



export default function CreditCardNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
            <div className="header">
            <h1>Manage Your CreditCard</h1> 
            </div>
            <div className="headerPic">
            <img src={Image}></img>
            </div>
            <div className="creditBar">
            <center>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/addcreditecard")}>Add your Credit Card</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/deletecreditecard")}>Delete Your Credit Card</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/customerdashboard")}>Back to Your DashBoard</Button>
            </center>
            </div>
        </nav>
    )
}