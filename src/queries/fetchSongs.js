import { gql } from 'apollo-boost';

export default gql `
    query {
        songs {
            name
        }
    }
`;