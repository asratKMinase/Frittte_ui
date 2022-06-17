import axios from "axios";
import { useRef } from "react";

export default function AccountRegister() {
  


  

    const url = "https://frittte.azurewebsites.net";

    

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
            const response = await axios.post(`${url}/customer/register`, user);
            console.log(response.data);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>Please register below.</h4>
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
                <input placeholder="Enter your employee status" ref={employeeInput}></input>
                <input placeholder="Enter Admin status" ref={adminInput}></input>

                <br></br>                   
                <br></br>
                <button onClick={register}>Add Account</button>
        </>
    );
}
