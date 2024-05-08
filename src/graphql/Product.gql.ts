import {gql} from "node_module/@apollo/client";

export const fragment_price_range = gql`
    fragment PriceRangeCustom on PriceRange {
        maximum_price {
            final_price {
                value
                currency
            }
            regular_price {
                value
                currency
            }
        }
        minimum_price {
            regular_price {
                value
                currency
            }
            final_price {
                value
                currency
            }
        }
        __typename
    }
`;