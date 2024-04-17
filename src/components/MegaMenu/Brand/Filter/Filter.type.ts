export interface Brand {
    id: number,
    image: string,
    name: string,
    url_key: string
}
export interface BrandsResponse{
    searchBrand: {
        items: Brand[]
    }
}