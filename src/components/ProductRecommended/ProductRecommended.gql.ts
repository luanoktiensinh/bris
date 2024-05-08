import {gql} from "@apollo/client";
import {fragment_price_range} from "@/graphql/Product.gql";

const FRAGMENT_RECOMMENDED_PRODUCT = gql`
    ${fragment_price_range}
    fragment RecommendedProduct on ProductInterface {
        uid
        name
        small_image {
            url
        }
        url_key
        stock_status
        price_range {
            ...PriceRangeCustom
        }
        ...on ConfigurableProduct {
            configurable_options {
                attribute_code
                values {
                    swatch_data {
                        value
                    }
                }
            }
        }
    }
`;
export const GQL_RECOMMENDED_PRODUCTS = gql`
    ${fragment_price_range}
    query getRecommendedProducts {
        products(pageSize: 20, search: "At") {
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
                ...on ConfigurableProduct {
                    configurable_options {
                        attribute_code
                        values {
                            swatch_data {
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;


