import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import query from '../queries/fetchSongs';
import mutation from '../mutations/addSong';


class NewSong extends Component {

    constructor(props) {
        super(props)

        this.state = {
            artistId: 1,
            songName: "",
            songAlbum:"Album 1",
            songLength: "3:22"       
        }

    }

    onSubmit(event) {
        event.preventDefault();
        event.target.reset();
        this.props.mutate({
            variables: {
                artistId: this.state.artistId,
                songName: this.state.songName,
                songAlbum: this.state.songAlbum,
                songLength: this.state.songLength
            },
            refetchQueries: [{ query }]            
       })
    }

    render() {
        return(
            <div className="new-song">
                <form className="form-group" 
                onSubmit={this.onSubmit.bind(this)}
                >
                    <label>Song Title:</label>
                    <input
                    required={true} 
                    className="form-control"
                    onChange={event => this.setState({ songName: event.target.value })}
                    />  
                    <input type="submit" value="Adicionar" />
                </form>
                
            </div>
        );
    }
}


//export default graphql(fetchArtists)(NewSong);

 export default graphql(mutation)(NewSong); 