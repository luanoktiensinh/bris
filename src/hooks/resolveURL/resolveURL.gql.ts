import { gql } from "@apollo/client";

export const GQL_RESOLVE_URL = gql`
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
			... on ProductInterface {
				uid
				__typename
			}
			... on CategoryInterface {
				uid
				__typename
			}
			__typename
		}
	}
`;
