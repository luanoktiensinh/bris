export interface IRoute {
    relative_url?: string,
    redirect_code: number,
    type: ("PRODUCT" | "CATEGORY" | "CMS_PAGE"),
    identifier: string,
    bottom_content: string,
    content?: string,
    content_heading: string,
    meta_description: string,
    meta_keywords: string,
    meta_title: string,
    page_layout: string,
    title: string,
    url_key: string,
    __typename: string,
    uid?: string
}
export interface IResolveRouteResponse {
    route: IRoute
}