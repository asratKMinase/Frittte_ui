import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";
import { useContext } from "react";

export default function AdminNavBar() {
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();

    function LogOut(){
        user.username = "Guest";
        navigate("/")
    }

    return (
        <nav>
            <center>
            <h1> Hello FRITTTE Admin, welcome to your Dashboard</h1>
            <Button onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            <Button onClick={() => navigate("/addproduct")}>Add a Product</Button>
            <Button onClick={() => navigate("/update-product")}>Update a Product</Button>
            <Button onClick={() => navigate("/delete-product")}>Delete a Product</Button>
            <Button onClick={LogOut}>Log Out</Button>
            </center>

        </nav>
    );
}
