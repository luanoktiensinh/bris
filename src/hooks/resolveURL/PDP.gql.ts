import {gql} from "@apollo/client";
import {FragmentBreadcrumb} from "@/graphql/Breadcrumb.gql";

export const PDPFragment = gql`
	${FragmentBreadcrumb}
    fragment PDPFragment on ProductInterface {
        name
        meta_title
        meta_description
        meta_keyword
        url_key
		categories {
			uid
			name
			url_path
			breadcrumbs {
				...FragmentBreadcrumb
			}
		}
        __typename
    }
`;