import React, { Component } from 'react'
import CommentSection from './CommentSection'
import ProfileInfoContainer from './ProfileInfoContainer'

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
            <div className="whole-container">
                <ProfileInfoContainer selectedProfile={this.props.selectedProfile}/>

                <div className="comment-container">
                    <form className="comment-form" onSubmit={ this.handleOnSubmit }>
                        <ul className="each-comment">
                            { this.renderMyComments() }
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
