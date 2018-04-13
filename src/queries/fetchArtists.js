import { gql } from 'apollo-boost';

export default gql `
    query {
        artists {
            name
        }
    }
`;