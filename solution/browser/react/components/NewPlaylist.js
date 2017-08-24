import React, { Component } from 'react';
import axios from 'axios'

export default class NewPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: "",
            isDirty: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            inputValues: event.target.value,
            isDirty: true
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addPlaylist(this.state.inputValues);
        this.setState({
            inputValues: "",
            isDirty: false
        })
        // axios.post('/api/playlists', {name: this.state.inputValues})
        //     .then(res => {
        //         console.log(res)
        //       })
            // .then(result => {
            //     sole.log(result) // response json from the server!
            // });
    }

    render() {
        const lengthCheck = this.state.inputValues.length > 16 ? true : false;
        const length = this.state.inputValues.length
        // const validation = this.state.inputValues.length<1 ? "true" : "false";
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input value={this.state.inputValues} className="form-control" type="text" onChange={this.handleChange} />
                            </div>
                            {(!this.state.isDirty || this.state.inputValues.length) ?
                                null : <div className="alert alert-warning" >Please enter a name</div>}
                            {lengthCheck ? <div className="alert alert-warning" >Please pick a shorter name</div> : null}
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled={lengthCheck}>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}