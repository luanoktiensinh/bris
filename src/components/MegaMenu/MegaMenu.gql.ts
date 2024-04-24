import { gql } from "@apollo/client";

export const GET_MEGAMENU_GQL = gql`
	query {
		getDynamicMenu {
			menu_items {
				id
				name
				link
				children {
					name
					link
					id
					children {
						name
						link
						id
						__typename
					}
					__typename
				}
				__typename
			}
			footer_icons {
				name
				link
				image
				__typename
			}
			__typename
		}
	}
`;
