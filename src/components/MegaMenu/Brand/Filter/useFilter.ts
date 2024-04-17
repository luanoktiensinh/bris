import { useLazyQuery } from "@apollo/client"
import { GQL_SEARCH_BRANDS } from "./Filter.gql"
import { BrandsResponse } from "./Filter.type";

export const useFilter = () => {
    const [ getBrands, { loading, data, error } ] = useLazyQuery<BrandsResponse>(GQL_SEARCH_BRANDS);
    return {
        getBrands,
        loading, data, error
    }
}