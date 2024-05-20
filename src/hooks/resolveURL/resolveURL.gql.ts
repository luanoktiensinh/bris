import { gql } from "@apollo/client";
import {PLPFragment} from "@/hooks/resolveURL/PLP.gql";
import {PDPFragment} from "@/hooks/resolveURL/PDP.gql";
export const GQL_RESOLVE_URL = gql`
	${PLPFragment}
	${PDPFragment}
	query ResolveURL($url: String!) {
		route(url: $url) {
			relative_url
			redirect_code
			type
			... on CmsPage {
				identifier
				bottom_content
				content
				content_heading
				meta_description
				meta_keywords
				meta_title
				page_layout
				title
				url_key
				__typename
			}
			...PDPFragment,
			...PLPFragment,
			__typename
		}
	}
`;
