export 
interface IResolveRouteResponse {
    route: {
        relative_url?: string,
        redirect_code: number,
        type: ("PRODUCT" | "CATEGORY" | "CMS_PAGE"),
        identifier: string,
        __typename: string,
        uid?: string
    }
}