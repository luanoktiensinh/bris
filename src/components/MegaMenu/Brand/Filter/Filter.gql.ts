import { gql } from "@apollo/client";

export const GQL_SEARCH_BRANDS = gql`
    query SearchBrand($search: String) {
        searchBrand(search: $search) {
            items {
            id
            name
            url_key
            }
        }
    }
`;