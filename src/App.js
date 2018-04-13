import React, { Component } from 'react';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { withClientState } from 'apollo-link-state';


//Components imports
import LeftPanel from './components/LeftPanel';
import SongDetail from './components/SongDetail';

const cache = new InMemoryCache();

const defaultState = {
  currentSong: {
    __typename: "SongName",
    songName: 'Nenhuma musica selecionada'
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateSong: (_, { index, value }, { cache }) => {
        const query = gql `
        query getCurrentSong {
            currentSong @client {
                __typename
                songName
            }
          }
        `;

        const previousState = cache.readQuery({ query })

        const data =  {
          ...previousState,
          currentSong: {
            ...previousState.currentSong,
            songName: value
          }
        }

        cache.writeData({ query, data });
      }
    }
  }
});

//Conexão com GraphqlServer
const client = new ApolloClient({
  link:  ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: 'http://localhost:4000/graphql'
    })
  ]), 
  cache
});



class App extends Component {

  render() {
    return (
        <ApolloProvider client={client}>
          <div>
            <LeftPanel  />
            <SongDetail  />
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
