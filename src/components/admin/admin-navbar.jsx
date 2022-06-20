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
            
            <Button variant="contained"  onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            <Button variant="contained" onClick={() => navigate("/addproduct")}>Add a Product</Button>
            <Button variant="contained" onClick={() => navigate("/update-product")}>Update a Product</Button>
            <Button variant="contained" onClick={() => navigate("/delete-product")}>Delete a Product</Button>
            <Button variant="contained" onClick={LogOut}>Log Out</Button>
            <br></br>

            <img src={adminimage}></img>
            <br></br>
            </body>
            

            </center>

        </nav>
    );
}
