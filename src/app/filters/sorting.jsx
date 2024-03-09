'use client';

import { useState } from "react";
import { sortBy } from "../constant";

const Modal = ({ isOpen, children }) => {
    return (
        <>
            {isOpen && (
                <div className="absolute left-[-40px] mt-1 bg-white border border-gray-300 rounded w-[200PX] px-3 py-2">
                    {children}
                </div>
            )}
        </>
    );
};

export default function Sorting() {

    const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSortClick = (sortOption) => {
        setSelectedSort(sortOption);
        closeModal();
    };

    return (
        <div className="relative inline-block">
            <div className="text-md font-bold leading-10 uppercase whitespace-nowrap text-stone-800" onClick={openModal}>
                <div className="flex gap-2 cursor-pointer">
                    <div className="grow">{selectedSort}</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b8e99e81d310b08a2ad60945ec8a87f95d37945ce710176cd215c3d611a95a?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                        className="shrink-0 my-auto w-4 aspect-square"
                    />
                </div>
            </div>
            <Modal isOpen={isModalOpen}>
                <div className="flex flex-col text-lg leading-10 uppercase whitespace-nowrap bg-red shadow-sm max-w-[180px] text-stone-800">
                    {
                        sortBy.map(sortOption => {
                            const isSelected = sortOption === selectedSort
                            return (
                                <div key={sortOption} className={`flex ${isSelected ? 'font-bold' : ''} `}>
                                    {
                                        isSelected ?
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/544ab76889ff52df5f4d6bac5a061a4a0dabb5f275a8e7c9e07c91aa5b2a5f5a?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                                                className="shrink-0 my-auto aspect-square w-[20px]"
                                            />
                                            :
                                            ""
                                    }
                                    <div key={sortOption} className="mt-2 text-sm text-right grow cursor-pointer" onClick={() => handleSortClick(sortOption)}>{sortOption}</div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </Modal>
        </div>
    );
}