'use client';

import { useEffect, useState } from "react";
import { decorateProductName, getAllProductService as getAllProduct } from "./productListService";

export default function ProductList({setProductCount, productFilters}) {

    const getAllProducts = async () =>{
        const products = await getAllProduct()
        setProducts(products);
        setProductCount(products.length);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    },[productFilters]);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28">
                {
                    products &&
                    products.map(product => (
                        <div key={product.id} className="flex flex-col grow max-md:w-full">
                            <div className="flex flex-col grow whitespace-nowrap max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet={product.image}
                                    className="w-full aspect-[0.90] shadow-md"
                                />
                                <div className="flex gap-2 mt-4">
                                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <div className="text-md font-bold uppercase text-ellipsis text-stone-800 flex justify-between">
                                            <div className="flex-grow truncate md:truncate-none">
                                                {decorateProductName(product.title)}
                                            </div>
                                           <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40fc0aa643fe40c66b6c0832c468da6899c89355d68f81ea2bdd97d198a6c852?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                                                className="shrink-0 self-end w-6 aspect-square"
                                            />
                                        </div>
                                        <div className="mt-2 text-sm underline text-zinc-500 text-left whitespace-normal max-w-[100%]">
                                            <span className="text-zinc-500">Sign in</span>
                                            <span className="text-zinc-500">
                                                {" "}
                                                or Create an account to see pricing
                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}