'use client';

import { useState } from "react";
import ProductList from "./components/products/ProductList";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import SidebarFilters from "./components/filters/SidebarFilters";
import Sorting from "./components/filters/Sorting";
import { filters } from "./constant";

export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [productFilters, setProductFilters] = useState(filters);

  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-col items-end px-2 md:px-10 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full text-center">
        <div className="self-center text-2xl md:text-6xl tracking-wider text-center uppercase text-stone-800 max-md:max-w-full">
          DISCOVER OUR PRODUCTS
        </div>
        <div className="self-center mt-1 md:mt-11 text-md md:text-2xl leading-10 text-center text-stone-800 w-[721px] max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
        <div className="shrink-0 self-stretch md:mx-4 my-1 md:my-0 md:mt-20 w-full h-px border border-solid bg-neutral-200 border-neutral-200 max-md:mt-10 max-md:mr-2.5" />
        <div className="hidden md:block flex flex-col self-stretch pt-6 mx-4 bg-white max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 justify-between pr-9 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="my-auto text-lg font-bold leading-10 uppercase text-stone-800">
                {productCount} Items
              </div>
              <div className="flex gap-2 text-base leading-10 text-right whitespace-nowrap bg-white text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 my-auto w-4 aspect-square">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <div className="grow underline cursor-pointer" onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'SHOW FILTER' : 'HIDE FILTER'}</div>
              </div>
            </div>
            <Sorting />
          </div>
          <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
        </div>
        <div className="block md:hidden flex flex-col text-sm font-bold uppercase whitespace-nowrap max-w-full w-full text-stone-800">
          <div className="flex justify-between self-center px-5 w-full max-w-full">
            <div className="my-auto">FILTER</div>
            <div className="shrink-0 border border-solid bg-neutral-200 border-neutral-200 h-[30px] mt-1" />

            <Sorting />
          </div>
          <div className="mt-2 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px]" />
        </div>
        <div className="self-stretch mx-4 mt-8 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {isHidden ? null : <SidebarFilters productFilters={productFilters} setProductFilters={setProductFilters} />}
            <ProductList setProductCount={setProductCount} productFilters={productFilters} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
