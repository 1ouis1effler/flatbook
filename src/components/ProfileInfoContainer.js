import React from 'react'

export default function ProfileInfoContainer(props) {
    return (
        <div className="profile-info-container">
            <h1>{props.selectedProfile.name}</h1>
                    <img className="select-image" src={ props.selectedProfile.avatar_url } alt="profileImage"/>
                    <p class="profile-info">Github username: { props.selectedProfile.login }</p>
                    <p class="profile-info">{ props.selectedProfile.followers } followers</p>
        </div>
    )
}
