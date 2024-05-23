import { getClient } from "@/lib/apolloClient";
import { GET_FOOTER_GQL } from "./Footer.gql";
import { cloneDeep } from "lodash";
import {IFooterBlock, IFooterResponse} from './Footer.type';
import {Footer} from "@/mock/data";
import {useHelpers} from "@/app/helpers";


export function useFooter() {
    const client = getClient();
		const { resolveLink } = useHelpers();
		const normalizeLink = (footers:  IFooterBlock[]) => {
			footers.forEach(block => {
				block.items.forEach((item) => {
					item.linkurl = resolveLink(item.linkurl);
				});
			});
		};
    const getData = async () => {
        const { data } = await client.query<IFooterResponse>({
            query: GET_FOOTER_GQL
        });
        // const data = Footer;
        const _data = cloneDeep(data);
				normalizeLink(_data.footers);
        return _data;
    };

    return {
        getData
    };
}