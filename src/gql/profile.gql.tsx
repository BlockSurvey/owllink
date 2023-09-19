import { gql } from "@apollo/client";

export const GET_PROFILE_BY_ID_QUERY = gql`
    query getProfileById($id: uuid!) {
        profile(where: {id: {_eq: $id}}) {
            id
            name
            description
            image
        }
    }
`;