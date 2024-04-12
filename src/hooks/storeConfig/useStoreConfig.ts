import { getClient } from "@/lib/apolloClient"
import { GQL_STORE_CONFIG } from "./storeConfig.gql";
import { IStoreConfigData } from "./storeConfig.type";

export const useStoreConfig = () => {
    const client = getClient();
    const get = async() => {
        const { data, error } = await client.query<IStoreConfigData>({
            query: GQL_STORE_CONFIG
        });
        return { data, error }
    }
    return {
        getStoreConfig: get
    }
}