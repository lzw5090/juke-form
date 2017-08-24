import React, { Component } from 'react';
import Songs from './Songs';
import axios from 'axios';
import AddSongForm from './AddSongForm'
export default class Playlist extends Component {
    constructor() {
        super();
        this.state = {
            playlist: {name: '', songs: []}
        }
        this.fetch=this.fetch.bind(this)
    }

    fetch(playlistId){
        axios.get(`/api/playlists/${playlistId}`)
            .then(res => res.data)
            .then(playlist => {
                this.setState({ playlist: playlist });
            });
    }

    componentDidMount() {

        const playlistId = this.props.match.params.playlistId;
        this.fetch(playlistId)
        

    }
    
    componentWillReceiveProps (nextProps) {
        const nextplaylistId = nextProps.match.params.playlistId;
        const currentplaylistId = this.props.match.params.playlistId;
        if (nextplaylistId!==currentplaylistId) this.fetch(nextplaylistId);
    }
    
    
    render() {
        return (<div>

            <h3>{this.state.playlist.name}</h3>
            <AddSongForm/>

            <Songs songs={this.state.playlist.songs} /> {/** Hooray for reusability! */}
            
            {this.state.playlist.songs && !this.state.playlist.songs.length && <small>No songs.</small>}
           
            <hr />
        </div>)
    };
}
