import { gql } from "@apollo/client";

export const GQL_STORE_CONFIG = gql`
	query getLocale {
		storeConfig {
			store_code
			locale
			__typename
			header_logo_src
			category_url_suffix
		}
		currency {
            base_currency_code
        }
	}
`;
