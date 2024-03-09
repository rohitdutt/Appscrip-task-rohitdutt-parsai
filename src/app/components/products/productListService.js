import { getAllProducts } from "./productHttpClient";

export const getAllProductService = async () =>{
    const response = await getAllProducts();
    if(response.status === 200) return response.data;
    else throw new Error("Error") 
}

export const decorateProductName = (productName) => {
    return (productName.length > 10 && window.innerWidth < 768) 
    ? 
        (productName.slice(0, 10) + '...') 
        : 
            (productName.length > 30 && window.innerWidth > 768) 
            ? 
                (productName.slice(0, 30) + '...') 
                : 
                    productName;
}