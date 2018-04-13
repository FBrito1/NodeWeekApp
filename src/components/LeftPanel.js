import React, { Component } from 'react';

//Components imports
import NewSong from '../components/NewSong';
import ListSongs from '../components/ListSongs';

const LeftPanel = (props) => {
    return (
        <div className="col-md-6">
            <ListSongs  />
            <NewSong />
        </div>
    );
};

export default LeftPanel;