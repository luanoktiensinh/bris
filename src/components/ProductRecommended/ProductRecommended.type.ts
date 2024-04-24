export interface IProductRecommendedAttrItem {
    label: string,
    value: string,
}
export interface IProductRecommendedAttr {
    name: string,
    label: string,
    items: IProductRecommendedAttrItem[]
}
export interface IProductRecommended {
    id: number,
    url: string,
    title: string,
    image: string,
    price: number | number[],
    attributes?: IProductRecommendedAttr[]
}
export interface IProductRecommendedProps {
    title?: string
}