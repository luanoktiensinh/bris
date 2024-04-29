export interface Price {
    original: string;
    discount?: string;
}

export interface IProduct {
    id: number;
    name: string;
    price: Price;
    image: string;
    imageHover?: string;
    url: string;
    labels?: string[];
}

export interface ProductsResponse {
    data: {
        title: string;
        products: IProduct[];
    }
}