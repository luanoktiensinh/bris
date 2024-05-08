import { getClient } from "@/lib/apolloClient"
import { GET_FOOTER_GQL } from "./Footer.gql";
import { cloneDeep } from "lodash";
import { IFooterResponse } from './Footer.type';
import {Footer} from "@/mock/data";


export function useFooter() {
    // const client = getClient();
    const getData = async () => {
        // const { data } = await client.query<IFooterResponse>({
        //     query: GET_FOOTER_GQL
        // });
        const data = Footer;
        const _data = cloneDeep(data);
        return _data;
    }

    return {
        getData
    }
}