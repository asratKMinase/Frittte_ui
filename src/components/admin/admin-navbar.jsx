import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";
import { useContext } from "react";
import adminimage from "../../adminimage.jpg"
import Logo from "../../Walmartlogo.jpg";
import yellowbody from "../../yellowbody.png";

export default function AdminNavBar() {
    const [user] = useContext(userContext);
    const navigate = useNavigate();

    function LogOut(){
        user.username = "Guest";
        navigate("/")
    }

    return (
        <nav>
            <center>
            <div class="header2">
             <img src={Logo} alt="Logo"></img>
            
            <br></br>
            
            <h2> Hello FRITTTE Admin!. Welcome to your Dashboard</h2>
            </div>
            <body className="body4">
            
    
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/addproduct")}>Add a Product</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/update-product")}>Update a Product</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/delete-product")}>Delete a Product</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={LogOut}>Log Out</Button>
            <br></br>

            <img src={adminimage}></img>
            <br></br>
            </body>
            

            </center>

        </nav>
    );
}
