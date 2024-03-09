import axios from "axios"

export const getAllProducts = async () =>{
    return await axios.get('https://fakestoreapi.com/products');
}