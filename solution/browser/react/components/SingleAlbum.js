import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

export default class SingleAlbum extends Component {

  constructor () {
    super();
    this.state = {
      album: {}
    };
    this.fetch = this.fetch.bind(this)
  }

  fetch(albumId){
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        album
      }));
  }

  componentDidMount () {
    const albumId = this.props.match.params.albumId;
    this.fetch(albumId)
  }

  componentWillReceiveProps (nextProps){
    const nextalbumId = nextProps.match.params.albumId
    const currentalbumId = this.props.match.params.albumId
    if(nextalbumId !== currentalbumId) this.fetch(nextalbumId)
  }
  render () {
    const album = this.state.album;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
