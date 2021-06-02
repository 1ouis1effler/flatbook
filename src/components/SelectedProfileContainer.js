import React, { Component } from 'react'

export default class SelectedProfileContainer extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.selectedProfile.name}</h1>
                <img src={this.props.selectedProfile.avatar_url} alt="profileImage"/>
                <p>{this.props.selectedProfile.login} is my nickname</p>
                <button onClick={() => this.props.toggleSelectedProfile({})}>Go Back</button>
            </div>
        )
    }
}
