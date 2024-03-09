import { getAllFilters } from "./filters.http"

export const getAllFiltersService = async () => {
    const response = await getAllFilters();
    if(response.status === 200) return response.data;
    else throw new Error('Fuck');
}