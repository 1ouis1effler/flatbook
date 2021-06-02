import React, { Component } from 'react'
import CommentSection from './CommentSection'

export default class SelectedProfileContainer extends Component {


    renderMyComments = () => {
        return this.props.comments.map(commentsObject => {
            return ( commentsObject.profileId === this.props.selectedProfile.id ? <CommentSection commentInfo={commentsObject}/> : "" )
        })
    }

    render() {
        return (
            <div className="selected-profile-container">

                <div>
                    <h1 className="selected-profile-name">{this.props.selectedProfile.name}</h1>
                    <img className="selected-profile-image" src={this.props.selectedProfile.avatar_url} alt="profileImage"/>
                    <p>{this.props.selectedProfile.login} is my nickname</p>
                </div>

                <div className="selected-profile-comments">
                        <ul>
                            {this.renderMyComments()}
                        </ul>
                    <form className="comment-form" >
                        <input
                            className="comment-input" 
                            type="text"
                            name="comment"
                            placeholder="Add a comment..."
                        />
                        <button className="comment-button" onClick={(event) => event.preventDefault() } >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    
}
