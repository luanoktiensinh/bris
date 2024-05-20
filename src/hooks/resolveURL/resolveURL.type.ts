export interface ICMSPage extends IRoute{
    bottom_content: string,
    content?: string,
    content_heading: string,
    meta_description?: string,
    meta_keywords?: string,
    meta_title?: string,
    page_layout: string,
    title: string,
}
export interface IPLPPage extends IRoute{
    name: string,
    description: string,
    meta_description?: string,
    meta_keywords?: string,
    meta_title?: string,
	breadcrumbs?: Breadcrumb[]
}
export interface IPDPPage extends IRoute{
    name: string,
    meta_description?: string,
    meta_keywords?: string,
    meta_title?: string,
	categories: ProductCategory[]
}
export interface IRoute {
    relative_url?: string,
    redirect_code: number,
    type: ("PRODUCT" | "CATEGORY" | "CMS_PAGE"),
    identifier: string,
    url_key: string,
    __typename: string,
    uid: string
}
export interface IResolveRouteResponse {
    route: ICMSPage | IPLPPage | IPDPPage
}