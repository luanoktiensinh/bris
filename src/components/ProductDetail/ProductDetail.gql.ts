import {gql} from "node_module/@apollo/client";
import {fragment_price_range} from "@/graphql/Product.gql";

export const GQL_RECOMMENDED_PRODUCTS_DETAIL = gql`
    ${fragment_price_range}
    query getRecommendedProducts($sku: String) {
        products(pageSize: 1, filter: { sku: {eq: $sku } }) {
            items {
                uid
                name
                small_image {
                    url
                }
                sku
                url_key
                url_suffix
                stock_status
                price_range {
                    ...PriceRangeCustom
                }
                media_gallery {
                    position
                    disabled
                    url
                    label
                }
                ...on ConfigurableProduct {
                    configurable_options {
                        label
                        use_default
                        attribute_code
                        values {
                            label
                            use_default_value
                            uid
                            swatch_data {
                                value
                            }
                        }
                    }
                }
                ...on ConfigurableProduct {
                    variants {
                        attributes {
                            uid
                            code
                            label
                        }
                        product {
                            sku
                            uid
                            price_range {
                                ...PriceRangeCustom
                            }
                            stock_status
                            media_gallery {
                                label
                                url
                                disabled
                                position
                            }
                        }
                    }
                }
            }
        }
    }
`;