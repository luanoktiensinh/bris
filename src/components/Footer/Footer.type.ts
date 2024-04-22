
export interface IFooterItem {
    linktext: string,
    linkurl: string
}

export interface IFooterBlock {
    title: string,
    items: IFooterItem[]
}

export interface IFooterResponse {
    footers: IFooterBlock[]
}