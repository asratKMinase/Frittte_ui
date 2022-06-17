import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import Dash from "../../DashBoard.jpg";


export default function CustomerNavBar(){
    const [user] = useContext(userContext);
    
    
    const navigate = useNavigate();

    function LogOut(){
        user.username = "Guest";
        navigate("/")
    }

    return(
        <nav>
            <div class="header">
            <h1>Welcome to Your Dashboard</h1>
            </div>
            <div className="dash">
                <img src={Dash}></img>
            </div>
            <div className="order">
            <center>
            <h2>Order</h2>
            <br></br>
            <div className="buttonUI">
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/create-an-order")}>Order</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/view-my-orders")}>View My Orders</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/update-an-order")}>Update Order</Button>
            </div>
            </center>
            </div>
            <center>
            <div className="account">
            <h2>Account Options</h2>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/updateanaccount")}>update an account</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/deleteanaccount")}>delete an account</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/creditcarddashboard")}>Credit Card</Button>
            </div>
            <div className="food">
            <h2>Account Options</h2>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/Food-Items")}>View Our Food Items</Button>
            <br></br>
            <br></br>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/make-payment")}>pay your balance</Button>
            </div>
            <div className="logOut">
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}}onClick={LogOut}>Log Out</Button>
            </div>
            </center>
        </nav>
    )
}