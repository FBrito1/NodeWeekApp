import { gql } from 'apollo-boost';

export default gql `
    query {
        currentSong @client {
            songName
        }
    }
`;