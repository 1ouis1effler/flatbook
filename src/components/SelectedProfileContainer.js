import React, { Component } from 'react'
import CommentSection from './CommentSection'

export default class SelectedProfileContainer extends Component {

    state = {
        comments: []
    }


    componentDidMount(){
        fetch('http://localhost:3000/comments')
          .then(response => response.json())
          .then(comments => this.setState({comments}))
    }

    addCommentToState = (comment) => {
        this.setState({
          comments: this.state.comments.concat([comment])
        })


    }


    renderMyComments = () => {
        return this.state.comments.map(commentsObject => {
            return ( 
                commentsObject.profileId === this.props.selectedProfile.id 
                ? 
                <CommentSection commentInfo={commentsObject} /> 
                : 
                ""
            )
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const myFormData = new FormData(event.target)
        const commentContent =  myFormData.get("comment")
        event.target.reset()
        console.log(commentContent)  

        //set state to optimist render
        const commentToAddObject = {
            id: this.state.comments.length + 1,
            profileId: this.props.selectedProfile.id,
            content: commentContent
        }
        
        //hopefully presist the frontend

        this.addCommentToState(commentToAddObject)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',     
            },
            body: JSON.stringify(commentToAddObject)
        }

        //fetch backend to add comment
        fetch('http://localhost:3000/comments/', options)
    }

    render() {
        return (
            <div>
                <h1>{this.props.selectedProfile.name}</h1>
                <img src={this.props.selectedProfile.avatar_url} alt="profileImage"/>
                <p>{this.props.selectedProfile.login} is my nickname</p>
                <p>I have {this.props.selectedProfile.followers} followers</p>
                <div>
                    <form className="comment-form" onSubmit={this.handleOnSubmit}>
                        <ul>
                            {this.renderMyComments()}
                        </ul>
                        <input
                            className="comment-input" 
                            type="text"
                            name="comment"
                            placeholder="Add a comment..."
                        />
                        <button className="comment-button"> Submit </button>
                    </form>
                </div>
            </div>
        )
    }
    
}
