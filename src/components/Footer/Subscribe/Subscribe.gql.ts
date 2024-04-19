import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_NEWSLETTER = gql`
    mutation SubscribeToNewsletter($email: String!, $firstName: String, $lastName: String!) {
        subscribeEmailToNewsletter(email: $email, firstName: $firstName, lastName: $lastName) {
            status
        }
    }
`;