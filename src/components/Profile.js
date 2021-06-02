import React from 'react'

export default function Profile(props) {



    return (
        <div className='profile-container'>
            <h2 className='profile-name' onClick={ () => props.toggleSelectedProfile(props.profile)}>{props.profile.name}</h2>
            <img className='profile-image' src={props.profile.avatar_url}/>
        </div>
    )
}
