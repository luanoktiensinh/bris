import {gql} from "@apollo/client";

export const FragmentBreadcrumb = gql`
	fragment FragmentBreadcrumb on Breadcrumb {
		category_uid
		category_name
		category_url_path
	}
`;