import { getClient } from "@/lib/apolloClient";
import { GQL_RESOLVE_URL } from "./resolveURL.gql";
import {ICMSPage, IPDPPage, IPLPPage, IResolveRouteResponse} from "./resolveURL.type";
import {cache, useCallback} from "react";
import { ApolloClient } from "@apollo/client";
import {Route} from "@/mock/data";

export const resolveRoute = cache(async(client: ApolloClient<any>, pathname:string) => {
    const { data, error } = await client.query<IResolveRouteResponse>({
        query: GQL_RESOLVE_URL,
        variables: {
            url: pathname
        }
    });
    // const data = Route;
    // const error = undefined;
    return { data, error };
});
export const getSEOField = (data: IResolveRouteResponse) => {
    const type = data.route.type;

    let result: {
        [key: string]: string
    } = {
        description: data.route.meta_description || '',
        keywords: data.route.meta_keywords || '',
    };
    switch (type) {
        case "CMS_PAGE": {
            let _route = <ICMSPage>data.route;
            result = {
                title: _route.meta_title || _route.title,

            };
            break;
        }
        case "CATEGORY": {
            let _route = <IPLPPage>data.route;
            result = {
                title: _route.meta_title || _route.name,
            };
            break;
        }
        case "PRODUCT": {
            let _route = <IPDPPage>data.route;
            result = {
                title: _route.meta_title || _route.name,
            };
        }
    }
    return result;
};
export const useResolveRoute = (pathname: string) => {
    const client = getClient();

    return {
        resolve: resolveRoute.bind(null, client, pathname)
    };
};