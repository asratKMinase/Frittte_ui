import axios from "axios";
import { useRef } from "react";

export default function AccountUpdate() {
  

    const url = "https://frittte.azurewebsites.net/customer";
    

    const usernameInput = useRef();
    const passwordInput  = useRef();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const dobInput = useRef();
    const employeeInput = useRef();
    const adminInput = useRef();
  
    async function register() {
        
        const user = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            dob: dobInput.current.value,
            employee: employeeInput.current.value,
            admin: adminInput.current.value,
             
    };
        try {
            const response = await axios.put(`${url}/update`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can update your account here.</h4>
                <input placeholder="Enter your username" ref={usernameInput}></input>
                <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter First Name" ref={fnameInput}></input>
                <input placeholder="Enter Last Name" ref={lnameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter your dob" ref={dobInput}></input>
                <input placeholder="Enter employee status" ref={employeeInput}></input>
                <input placeholder="Enter Admin status" ref={adminInput}></input>

                <br></br>                   
                <br></br>
                <button onClick={register}>Update Account</button>
        </>
    );
}
