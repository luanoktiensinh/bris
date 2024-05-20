import {gql} from "@apollo/client";
import {fragment_config_options_preview, fragment_price_range} from "@/graphql/Product.gql";

export const GQL_GET_CATEGORY = gql`
    ${fragment_price_range}
	${fragment_config_options_preview}
    query GetCategories(
        $pageSize: Int
        $currentPage: Int
        $filters: ProductAttributeFilterInput = {}
        $sort: ProductAttributeSortInput
    ) {
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $filters
            sort: $sort
        ) {
            ...ProductsFragment
            __typename
        }
    }
    fragment ProductsFragment on Products {
        sort_fields {
            default
            options {
                label
                value
            }
        }
        aggregations {
            label
            count
            attribute_code
            options {
                label
                value
                count
                __typename
            }
            position
            __typename
        }
        items {
            uid
            name
            price_range {
                ...PriceRangeCustom
            }
            sku
            badges {
                label
                extra_text
                type
                __typename
            }
            thumbnail {
                url
            }
            stock_status
            review_count
            rating_summary
            url_key
            url_suffix
			...ConfigurationProductOptionsPreview
            __typename
        }
        page_info {
            total_pages
            __typename
        }
        total_count
        __typename
    }

`;