
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function ViewAllFood() {
    
    const [user, setUser] = useContext(userContext);
    const [showLog, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const [itemNameBody, setItemName] = useState()
    const [num, setNum] = useState(0);
    const [CHOCDF, setCHOCDF] = useState()
    const [ENERC_KCAL, setENERC_KCAL] = useState()
    const [FAT, setFAT] = useState()
    const [FIBTG, setFIBTG] = useState()
    const [PROCNT, setPROCNT] = useState()
    const itemInput = useRef();
    const input4 = useRef();



    const [img, setImg] = useState();


    async function getItem(){
        
        const getItemResponse = await axios.get(`https://frittte.azurewebsites.net/findFoodItem?id=${itemInput.current.value}`)
        console.log(getItemResponse.data.itemName)

        if(getItemResponse.data.itemName === itemInput.current.value){
        
        const response = await axios(`https://api.edamam.com/api/food-database/v2/parser?app_id=16bdf670&app_key=%2016a8b4660a8d35e4fd58f088e9d5f5ea&ingr=${itemInput.current.value}&nutrition-type=cooking`)
        console.log(response)
        const item = response.data.parsed[0].food.label
        setItemName(item)
        const imgPic = response.data.parsed[0].food.image
        setImg(imgPic)
        const nutri1 = response.data.parsed[0].food.nutrients.CHOCDF
        const nutri2 = response.data.parsed[0].food.nutrients.ENERC_KCAL
        const nutri3 = response.data.parsed[0].food.nutrients.FAT
        const nutri4 = response.data.parsed[0].food.nutrients.FIBTG
        const nutri5 = response.data.parsed[0].food.nutrients.PROCNT
        setCHOCDF(nutri1)
        setENERC_KCAL(nutri2)
        setFAT(nutri3)
        setFIBTG(nutri4)
        setPROCNT(nutri5)
    } else{
        console.log("Item is not in the system")
    }
}
    async function createOrder(){
        
        if(user.username === "Guest"){
            setShowLogin(!showLog)
        }else{

            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            const order = {
            
                id: num,
                orderDate: date,
                itemName: itemNameBody,
                comment: input4.current.value,
                customerUsername: user.username
            };

            try {
                const response = await axios.post("https://frittte.azurewebsites.net/order", order);
                console.log(response.data);
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    }

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    function toLogin(){
        navigate("/login")
    }

    const click = () => {setNum(randomNumberInRange(1,100000))}

    return (
        <>
            <h3>Search for a Food item</h3>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Type a Food to Search for it" ref={itemInput}></input>
            <button onClick={getItem}>Press to Find a Food item</button>
            <br></br>
            <h3>{itemNameBody}</h3>
            <img src={img}></img>
            <h3>Cholesterol = {CHOCDF}</h3>
            <h3>Energy = {ENERC_KCAL}</h3>
            <h3>Fat = {FAT}</h3>
            <h3>Fiber = {FIBTG}</h3>
            <h3>Protien = {PROCNT}</h3>
            <br></br>
            <input placeholder="Add a Comment if you would like to change anything" ref={input4}></input>
            <button onClick={() => {click(); createOrder()}}>Order</button>
            {showLog && <p>To Order You need to Login. Press the Button Below to be taken to the Login Page</p> }
            {showLog && <button onClick={toLogin} >To Login</button> }
            
        </>
    )
}