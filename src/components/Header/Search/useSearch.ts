'use client';

import { IProduct } from './SearchSuggestionProduct/SearchSuggestionProduct.type';
import { ISearchResponse, IItemSuggestion } from './Search.type';

import { useState, useEffect } from "react";
import { GET_SEARCH_TERM_DATA, PRODUCT_SEARCH } from './Search.gql';
import { useLazyQuery } from '@apollo/client';

export const useSearch = () => {
    const [productSuggestion, setProductSuggestion] = useState<IProduct[]>([]);
    const [keywordsSuggestion, setKeywordsSuggestion] = useState<IItemSuggestion[]>([]);
    const [categorySuggestion, setCategorySuggestion] = useState<IItemSuggestion[]>([]);
    const [brandsSuggestion, setBrandsSuggestion] = useState<IItemSuggestion[]>([]);

    const [openPopup, setOpenPopup] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [abortController, setAbortController] = useState(new AbortController());

    const [ runQuerySearchProduct ] = useLazyQuery(PRODUCT_SEARCH, { nextFetchPolicy: 'no-cache', context: {
      fetchOptions: {
        signal: abortController.signal,
      },
    }, });
    
    const onSearch = async (searchTerm: String) => {                  
        let dataResponseProduct = await runQuerySearchProduct({ variables: {
          inputText: searchTerm,
          fetchPolicy: "network-only",
          filters: {}
        }});

        let responsive = await new Promise<ISearchResponse>((resolve, reject) => {
            resolve({
                data: {
                    keywords: [
                        {
                          "term": "kettle",
                          "url": "/search2/?q=kettle"
                        },
                        {
                          "term": "kitchenaid",
                          "url": "/search2/?q=kitchenaid"
                        },
                        {
                          "term": "knife",
                          "url": "/search2/?q=knife"
                        },
                        {
                          "term": "kitchen",
                          "url": "/search2/?q=kitchen"
                        }
                      ],
                    category: [
                        {
                          "term": "Storage",
                          "url": "/search2/?q=k&type=Storage"
                        },
                        {
                          "term": "Duvet Cover Sets",
                          "url": "/search2/?q=k&type=Duvet%20Cover%20Sets"
                        },
                        {
                          "term": "Mugs",
                          "url": "/search2/?q=k&type=Mugs"
                        },
                        {
                          "term": "Accessories",
                          "url": "/search2/?q=k&type=Accessories"
                        }
                    ],
                    brands: [
                        {
                          "term": "Just Home",
                          "url": "/search2/?q=k&brand=Just%20Home"
                        },
                        {
                          "term": "Maxwell & Williams",
                          "url": "/search2/?q=k&brand=Maxwell%20%26%20Williams"
                        },
                        {
                          "term": "Simon Gault",
                          "url": "/search2/?q=k&brand=Simon%20Gault"
                        },
                        {
                          "term": "Brabantia",
                          "url": "/search2/?q=k&brand=Brabantia"
                        }
                    ],
                }                
            });
        });
        
        setProductSuggestion(dataResponseProduct?.data?.products.items);
        setKeywordsSuggestion(responsive.data.keywords);
        setCategorySuggestion(responsive.data.category);
        setBrandsSuggestion(responsive.data.brands);
    };

    useEffect(() => {      
      onSearch(searchTerm);

      return () => {        
        abortController.abort();
        setAbortController(new AbortController());
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, openPopup]);

    return {abortController, setAbortController, onSearch, productSuggestion, keywordsSuggestion, categorySuggestion, brandsSuggestion, openPopup, setOpenPopup, searchTerm, setSearchTerm};
};
