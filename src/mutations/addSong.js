import { gql } from 'apollo-boost';
 
export default gql `
 mutation addSong($artistId: Int!, $songName: String!, $songAlbum: String!, $songLength: String!) {
    addSong(artistId: $artistId, songName: $songName, songAlbum: $songAlbum, songLength: $songLength) {
      name
    }
  }
`; 