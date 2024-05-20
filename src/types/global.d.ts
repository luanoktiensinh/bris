type PropUpdate<T extends object> = {
    [K in keyof T]: { type: K; props: T[K] }
  }[keyof T];
type Money = {
    currency: string,
    value: number
}
type ProductPrice = {
    final_price?: Money
    regular_price?: Money
}
type PriceRange = {
    maximum_price?: ProductPrice
    minimum_price?: ProductPrice
}

type Breadcrumb = {
	category_name: string
	category_uid: string
	category_url_path: string
}