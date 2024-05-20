import {gql} from "@apollo/client";
import {fragment_config_options_preview, fragment_price_range} from "@/graphql/Product.gql";

export const GQL_RECOMMENDED_PRODUCTS = gql`
    ${fragment_price_range}
	${fragment_config_options_preview}
    query getRecommendedProducts {
        products(pageSize: 10, search: "KAS Tyler Cotton Slub Cushion 50x50cm") {
            items {
                uid
                name
                small_image {
                    url
                }
                url_key
                url_suffix
                stock_status
                sku
                price_range {
                    ...PriceRangeCustom
                }
                ...ConfigurationProductOptionsPreview
            }
        }
    }
`;


