import { getClient } from "@/lib/apolloClient"
import { GET_MEGAMENU_GQL } from "./MegaMenu.gql";

export const useMegaMenu = () => {
    const client = getClient();
    const getData = async () => {
        const { data } = await client.query({
            query: GET_MEGAMENU_GQL
        });
        return data;
    }
    return {
        getData
    }
}