type ProductImage = {
    disabled: Boolean;
    label: string;
    position: Number;
    url: string;
}

export interface IProduct {
    id: number;
    name: string;
    price_range: PriceRange;
    small_image: ProductImage;
    sku: string;
    url_key: string;
    url: string;
    labels?: string[];
}

export interface ISearchSuggestionProductProps {
    products: IProduct[];
}

export interface ISearchSuggestionProductProps {
    products: IProduct[];
}