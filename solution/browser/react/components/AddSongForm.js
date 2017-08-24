import React, { Component } from 'react';
import axios from 'axios'

export default class AddSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addedSong: ""
        };

        
    }

    handleChange(event){
        this.setState({
            addedSong: event.target.value
        })
    }

    handleSubmit(event){
        this.setState({
            addedSong: ""
        })
    }
    render(){
        return(
            <div className="well">
            <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Add to Playlist</legend>
                <div className="form-group">
                  <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                  <div className="col-xs-10">
                    <select className="form-control" name="song" onChange={this.handleChange}>
                      <option value="SONGID_GOES_HERE">song name</option>
                      <option value="SONGID_GOES_HERE">another song name</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" className="btn btn-success">Add Song</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        )
    }
}



