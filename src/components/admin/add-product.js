import axios from "axios";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import Logo from "../../Walmartlogo.jpg";

export default function AddProduct() {

    const idInput = useRef();
    const costInput = useRef();
    const weightInput = useRef();
    const volumeInput = useRef();
    const frozenInput = useRef();

    const [itemName, setItemName] = useState()
    const [CHOCDF, setCHOCDF] = useState()
    const [ENERC_KCAL, setENERC_KCAL] = useState()
    const [FAT, setFAT] = useState()
    const [FIBTG, setFIBTG] = useState()
    const [PROCNT, setPROCNT] = useState()
    const itemInput = useRef();



    const [img, setImg] = useState();


    async function getItem(){
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
    }


    const[food, setFood]  = useState(true);
    const url = "https://frittte.azurewebsites.net";

    async function createProduct(){
        const newProduct = {
            id: idInput.current.value,
            itemName:itemName,
            cost:costInput.current.value,
            weight:weightInput.current.value,
            volume:volumeInput.current.value,
            frozen:frozenInput.current.value,
        };
        try{
            await axios.post(`${url}/newFoodItem`,newProduct);
            if (food === true){
                setFood(false);
            } else {
                setFood()
            }    
        } catch (error){
            console.error(error);
        }
    }
   
    return(

        <>
        <center>
        <div class="header2">
             <img src={Logo} alt="Logo"></img>
            
            <br></br>
            
            <h2>Find and Add your product</h2>
            </div>
            <body className="body4">
        <input className="Placeholder"  placeholder="Type a Food to Search for it" ref={itemInput}></input>
        <Button variant="contained"onClick={getItem}><h8>Press to Find a Food item</h8></Button>
        <br></br>
        <br></br>

        <input className="Placeholder" placeholder="Enter your item id" ref={idInput}></input>
        <input className="Placeholder" placeholder="Enter your item cost" ref={costInput}></input>

        <br></br>
        <br></br>
        <input className="Placeholder"  placeholder="Enter your item weight" ref={weightInput}></input>
        <input className="Placeholder"  placeholder="Enter your item volume" ref={volumeInput}></input>
        <input className="Placeholder"  placeholder="Is your item frozen" ref={frozenInput}></input>

        <br></br>
        <br></br>
            <h8>{itemName}</h8>
            <img className="Placeholder2" src={img}></img>
            <h3>Cholesterol = {CHOCDF}</h3>
            <h3>Energy = {ENERC_KCAL}</h3>
            <h3>Fat = {FAT}</h3>
            <h3>Fiber = {FIBTG}</h3>
            <h3>Protien = {PROCNT}</h3>
            <br></br>
        <br></br>
        <Button variant="contained" onClick={createProduct}><h8>Create</h8></Button>
        </body>
        </center>
       
        </>
    );
   
}