import { getClient } from "@/lib/apolloClient";
import { GQL_RESOLVE_URL } from "./resolveURL.gql";
import { IResolveRouteResponse } from "./resolveURL.type";
import { cache } from "react";
import { ApolloClient } from "@apollo/client";
import {Route} from "@/mock/data";

// export const resolveRoute = cache(async(client: ApolloClient<any>, pathname:string) => {
export const resolveRoute = cache(async() => {
    // const { data, error } = await client.query<IResolveRouteResponse>({
    //     query: GQL_RESOLVE_URL,
    //     variables: {
    //         url: pathname
    //     }
    // });
    const data = Route;
    const error = undefined;
    return { data, error };
});

export const useResolveRoute = (pathname: string) => {
    // const client = getClient();
    return {
        // resolve: resolveRoute.bind(null, client, pathname),
        resolve: resolveRoute
    };
};