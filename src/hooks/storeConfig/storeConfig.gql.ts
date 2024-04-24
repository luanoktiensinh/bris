import { gql } from "@apollo/client";

export const GQL_STORE_CONFIG = gql`
	query getLocale {
		storeConfig {
			store_code
			locale
			__typename
			header_logo_src
		}
		currency {
            base_currency_code
        }
	}
`;
