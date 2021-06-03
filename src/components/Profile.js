import React from 'react'

export default function Profile(props) {

    const whatNameToDisplay =  props.profile.name ? props.profile.name : props.profile.login 

    return (
        <div className='profile-container'>
            <h2 
                className='profile-name' 
                onClick={ () => props.toggleSelectedProfile(props.profile)}
            >
                {whatNameToDisplay}
            </h2>
            <img 
                className='profile-image' 
                src={props.profile.avatar_url} 
                alt="making me"
            />
        </div>
    )
}
