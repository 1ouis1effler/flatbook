import React, { Component } from 'react'
import Profile from './Profile'

export default class AllProfilesContainer extends Component {

    //this container holds an abbreviated view 
    //for each profile in our database

    //take all profiles passed down from app.js,
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
