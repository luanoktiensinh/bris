import { getClient } from "@/lib/apolloClient";
import { GQL_STORE_CONFIG } from "./storeConfig.gql";
import { IStoreConfigData } from "./storeConfig.type";
import {StoreConfig} from "@/mock/data";

export const useStoreConfig = () => {
    const client = getClient();
    const get = async() => {
        const data = StoreConfig;
        const error = undefined;
        // const { data, error } = await client.query<IStoreConfigData>({
        //     query: GQL_STORE_CONFIG,
        //     fetchPolicy: 'cache-first'
        // });
        return { data, error };
    };
    return {
        getStoreConfig: get
    };
};