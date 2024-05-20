import {gql} from "@apollo/client";
import {FragmentBreadcrumb} from "@/graphql/Breadcrumb.gql";

export const PLPFragment = gql`
	${FragmentBreadcrumb}
    fragment PLPFragment on CategoryInterface {
        name
        description
        uid
        meta_keywords
        meta_description
        meta_title
		breadcrumbs {
			...FragmentBreadcrumb
		}
        __typename
    }
`;