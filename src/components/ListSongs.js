import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';


//Queries imports
import fetchSongs from '../queries/fetchSongs';

//Mutations imports
import updateSong from '../mutations/updateSong';


class ListSongs extends Component {

    /* constructor(props) {
        super(props)

        this.state = {
            songSeleted: null
        }

    } */


    renderSongs() {

        if(!this.props.data.songs) {
            return <div>Loading...</div>
        }

        const { updateSong } = this.props;

        return this.props.data.songs.map(({ name }) => {
            return (
                <button
                    value={name}
                    className="collection-item btn btn-primary"
                    onClick={() => updateSong({
                        variables: {
                            index: '',
                            value: name
                        } 
                    })}
                    key={name}
                > 
                {name} 
                </button>  
            );
        });
    }
    
    render() {
        return(
            <div className="song-list">
                {this.renderSongs()}
            </div>
        );
    }
}


//export default graphql(fetchSongs)(ListSongs);

export default compose(
    graphql(updateSong, { name: 'updateSong' }),
    graphql(fetchSongs)
)(ListSongs)