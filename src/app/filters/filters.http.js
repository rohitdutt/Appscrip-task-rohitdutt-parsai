import axios from "axios"

export const getAllFilters = async () => {
    return await axios.get('https://fakestoreapi.com/products/categories');
}