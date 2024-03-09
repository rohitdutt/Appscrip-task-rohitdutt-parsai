export default function SidebarFilters({ productFilters, setProductFilters }) {

    const handleCheckboxChange = (filterIndex, subFilterIndex) => {
        setProductFilters(prevFilters => {
            return prevFilters.map((filter, i) => {
                if (i === filterIndex) {
                    const updatedValues = filter.values.map((subFilter, j) => {
                        if (j === subFilterIndex) {
                            return {
                                ...subFilter,
                                value: !subFilter.value
                            };
                        }
                        return subFilter;
                    });
                    return {
                        ...filter,
                        values: updatedValues
                    };
                }
                return filter;
            });
        });
    };

    const handleFilterClick = (index) => {
        setProductFilters(prevFilters => {
            return prevFilters.map((filter, i) => {
                if (i === index) {
                    return {
                        ...filter,
                        isSubFilterVisible: !filter.isSubFilterVisible
                    };
                }
                return filter;
            });
        });
    };

    const handleClearAll = (filterIndex) => {
        setProductFilters(prevFilters => {
            return prevFilters.map((filter, i) => {
                if (i === filterIndex) {
                    const updatedValues = filter.values.map(subFilter => ({
                        ...subFilter,
                        value: false
                    }));
                    return {
                        ...filter,
                        values: updatedValues
                    };
                }
                return filter;
            });
        });
    };


    return (
        <>
            <div className="hidden md:block flex flex-col w-full md:w-[50%] max-md:ml-0">
                <div className="flex flex-col text-lg font-bold text-stone-800 max-md:mt-4">
                    <div className="flex gap-2 justify-center uppercase whitespace-nowrap">
                        <input type="checkbox" className="border border-solid border-neutral-600 h-[22px] w-[22px]" onClick={() => console.log("TEST")} />
                        <div className="flex-auto">Customizble</div>
                    </div>
                    {
                        productFilters && productFilters.map((filter, filterIndex) => (
                            <div key={filter.name}>
                                <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-200 border-neutral-200" />
                                <div className="flex gap-5 justify-between mt-6 uppercase">
                                    <div className="text-md">{filter.name}</div>
                                    {
                                        filter.isSubFilterVisible ?
                                            (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 my-auto w-4 aspect-square cursor-pointer"
                                                    onClick={() => handleFilterClick(filterIndex)}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>
                                            )
                                            :
                                            (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 my-auto w-4 aspect-square cursor-pointer"
                                                    onClick={() => handleFilterClick(filterIndex)}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            )
                                    }
                                </div>
                                <div className="mt-2 text-sm text-left">All</div>
                                <div className="flex flex-col text-base max-w-[300px] text-stone-800 text-left">
                                    {
                                        filter.isSubFilterVisible ?
                                            <div className="w-full underline text-neutral-300 cursor-pointer" onClick={() => handleClearAll(filterIndex)}>Unselect all</div>

                                            : null

                                    }
                                    {
                                        filter && filter.isSubFilterVisible && filter.values.map((subFilters, subFilterIndex) => {
                                            return (
                                                <>
                                                    <div className="flex gap-2 mt-6 whitespace-nowrap cursor-pointer" onClick={() => handleCheckboxChange(filterIndex, subFilterIndex)}>
                                                        <input type="checkbox" checked={subFilters.value} className="shrink-0 self-start bg-white border border-solid border-neutral-600 h-[18px] w-[18px]" />
                                                        <div className="flex-auto">{subFilters.key}</div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-200 border-neutral-200" />
                </div>
            </div>
        </>
    );
}