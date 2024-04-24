import { useLazyQuery } from "@apollo/client";
import { GQL_SEARCH_BRANDS } from "./Filter.gql";
import { BrandsResponse } from "./Filter.type";
import { useState } from "react";

export const useFilter = () => {
    const [aborterRef, setAborterRef] = useState(new AbortController());
    const [ getBrands, { loading, data, error } ] = useLazyQuery<BrandsResponse>(GQL_SEARCH_BRANDS, {
        context: {
            fetchOptions: {
                signal: aborterRef.signal
            }
        }
    });
    return {
        setAborterRef,
        aborterRef,
        getBrands,
        loading, data, error
    };
};