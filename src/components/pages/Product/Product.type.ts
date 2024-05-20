import { IPDPPage } from "@/hooks/resolveURL/resolveURL.type";
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

export type ProductPageProps = {
    data: IPDPPage;
}