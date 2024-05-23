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

export const fragment_config_options_preview = gql`
	fragment ConfigurationProductOptionsPreview on ConfigurableProduct {
		configurable_options {
			attribute_code
			values {
				label
				swatch_data {
					value
					...on ImageSwatchData {
						value
						thumbnail
					}
					...on ColorSwatchData {
						value
					}
					...on TextSwatchData {
						value
					}
				}
			}
		}
	}
`;