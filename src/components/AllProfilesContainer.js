import React, { Component } from 'react'
import Profile from './Profile'

export default class AllProfilesContainer extends Component {

    //this component holds a card for each profile in db.json
    //take all profiles passed down from app.js state
    //create a profile card for each <Profile />
    renderProfiles = () => {
        return this.props.profiles.map(profile => {
            return <Profile key={profile.id} profile={profile} toggleSelectedProfile={this.props.toggleSelectedProfile}/>
        })
    }
    render() {
        return (
            <div className='all-profile-container'>
                {this.renderProfiles()}
            </div>
        )
    }
}
