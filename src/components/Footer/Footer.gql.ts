import { gql } from "@apollo/client";

export const GET_FOOTER_GQL = gql`
    query getFooter {
        footers {
            items {
                linktext
                linkurl
            }
            title
        }
    }
`;
