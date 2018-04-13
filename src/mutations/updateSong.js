import { gql } from 'apollo-boost';

export default gql`
    mutation updateSong($index: String!, $value: String!) {
        updateSong(index: $index, value: $value) @client {
            songName
        }
    }
`;