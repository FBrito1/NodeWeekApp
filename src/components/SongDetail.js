import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import YTsearch from 'youtube-api-search';

//Queries Imports
import getCurrentSong from '../queries/getCurrentSong';

//ApiKey
const API_KEY = 'AIzaSyBXamyvoaLQHRUY_4nh1Fna2U2y9GYzOtE';


/* class SongDetail extends Component {

    render() {
        const { currentSong } = this.props;
        return(
            <div className="col-md-6 song-detail">
                <h1>{currentSong.songName}</h1>
            </div>
        );
    
    }   
} */


class SongDetail extends Component {

    constructor(props) {
        super(props)

        this.state = { url: null }
    }

  
    renderVideo() {
        const { currentSong } = this.props;
        YTsearch({key: API_KEY, term: currentSong.songName}, (videos) => {
            const video = videos[0];
            const videoUrl = video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoUrl}`;
            console.log(url);
            this.setState({ url })
        });
    } 

    render() {
        const { currentSong } = this.props;
        return(
            <div className="col-md-6 song-detail video-detail">
                <h1>{currentSong.songName}</h1>
                <button onClick={() => this.renderVideo()}>Show Video</button>                
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={this.state.url}></iframe>
                </div>
                
            </div>
        );
    }
}


export default compose(
    graphql(getCurrentSong, {
        props: ({ data: { currentSong } }) => ({
            currentSong
        })
    })
)(SongDetail);