import {IPLPPage} from "@/hooks/resolveURL/resolveURL.type";

export type CategoryPageProps = {
    data: IPLPPage,
	gridPerPage: number,
	searchParams?: { [key: string]: string | string[] | undefined }
}
export type UseQueryVariablesProps = {
	defaultFilters?: FilterObject,
	gridPerPage: number
}
export type UseCategoryProps = {
    defaultFilters?: FilterObject
}

export type UseCategoryServerProps = {
	uid: string,
	gridPerPage: number,
	searchParams?: { [key: string]: string | string[] | undefined }
}
export type AggregationOption = {
    label: string,
    value: string,
    count: number
}
export type Aggregation = {
    label: string,
    position?: number,
    count: number,
    attribute_code: string,
    options: AggregationOption[]
}
export type BadgeItem = {
    extra_text: string
    label: string
    type: string
}
export type SearchResultPageInfo = {
    total_pages: number
}
export type ProductItem = {
    uid: string,
    sku: string,
    name: string,
    badges: BadgeItem[],
    thumbnail: {
        url: string
    },
    price_range: PriceRange,
    rating_summary: number,
    review_count: number,
    stock_status: string,
    url_key: string,
    url_suffix: string,
	configurable_options?: ConfigurableProductOption[],
    __typename: string
}
export type SortField = {
    label: string,
    value: string
}
export type SortFields = {
    default: string,
    options: SortField[]
}
export type Products = {
    sort_fields: SortFields,
    aggregations: Aggregation[],
    items: ProductItem[],
    page_info: SearchResultPageInfo,
    total_count: number
}
export type CategoryResponse = {
    products: Products
}
export type CategoryVariableFilterIn = {
    in: string[]
}
export type CategoryVariableFilterPrice = {
    from: string,
    to: string
}
export type CategoryVariableFilter = {
    [key: string]: CategoryVariableFilterIn | CategoryVariableFilterPrice
}
export type CategoryVariableSort = {
    [key: string]: string
}
export type CategoryVariable = {
    currentPage?: number,
    pageSize?: number,
    sort?: CategoryVariableSort,
    filters: CategoryVariableFilter
}
export type CategoryVariableObject = {
    currentPage?: number,
    pageSize?: number,
    sort?: string,
    filters: FilterObject
}
export type FilterObject = {
    [key: string]: string[]
}