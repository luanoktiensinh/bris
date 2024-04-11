import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    const beURL = process.env.BE_URL?.replace(/\/$/g, '');
    
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: beURL + "/graphql"
        })
    });
});