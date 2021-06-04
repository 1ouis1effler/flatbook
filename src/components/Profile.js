import React from 'react'

export default function Profile(props) {

    //ternary that looks for a profile name from props
    //if profile name is a falsy value, instead reder the username from Github
    const whatNameToDisplay =  props.profile.name ? props.profile.name : props.profile.login 

    return (
        <div className='profile-container'>
            <h2 
                className='profile-name' 
                onClick={ () => props.toggleSelectedProfile(props.profile) }
            >
                { whatNameToDisplay }
            </h2>
            <img 
                className='profile-image' 
                src={ props.profile.avatar_url } 
                alt="making me"
            />
        </div>
    )
}
