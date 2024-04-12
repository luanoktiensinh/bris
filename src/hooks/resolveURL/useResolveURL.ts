import { getClient } from "@/lib/apolloClient"
import { GQL_RESOLVE_URL } from "./resolveRoute.gql";
import { IResolveRouteResponse } from "./resolveURL.type";

export const useResolveRoute = (pathname: string) => {
    const client = getClient();
    const resolve = async() => {
        const { data, error } = await client.query<IResolveRouteResponse>({
            query: GQL_RESOLVE_URL,
            variables: {
                url: pathname
            }
        });
        return { data, error };
    }
    return {
        resolve
    }
}