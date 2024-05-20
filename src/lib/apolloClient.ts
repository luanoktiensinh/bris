import { REVALIDATE_TAGS } from "@/const/revalidateTags";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import possibleTypes from './possibleTypes.json';
export const { getClient } = registerApolloClient(() => {
    const beURL = process.env.BE_URL?.replace(/\/$/g, '');
    
    return new ApolloClient({
        cache: new InMemoryCache({
            possibleTypes
        }),
        link: new HttpLink({
            uri: beURL + "/graphql",
            fetchOptions: {
                cache: "no-cache",
            }
        }),
    });
});