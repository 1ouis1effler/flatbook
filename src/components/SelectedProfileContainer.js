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
            <div>
                <h1>{this.props.selectedProfile.name}</h1>
                <img src={this.props.selectedProfile.avatar_url} alt="profileImage"/>
                <p>{this.props.selectedProfile.login} is my nickname</p>
                <div>
                    <form className="comment-form" >
                        <ul>
                            {this.renderMyComments()}
                        </ul>
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
