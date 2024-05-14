import { IProduct } from './SearchSuggestionProduct/SearchSuggestionProduct.type';

export interface ISearch {
    classes?: string
}

export interface IItemSuggestion {
    term: string,
    url: string
}
export interface ISearchResponse {
    data: {
        keywords: IItemSuggestion[];
        category: IItemSuggestion[]
        brands: IItemSuggestion[]
    }
}

export interface ISearchPopupProps {
    productSuggestion: IProduct[];
    brandsSuggestion: IItemSuggestion[];
    categorySuggestion: IItemSuggestion[];
    keywordsSuggestion: IItemSuggestion[];
}