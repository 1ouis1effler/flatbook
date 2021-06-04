import React from 'react'

export default function CommentSection(props) {
    //this component renders an li nested in a div. 
    //it displays a comment through props
    return (
        <div>
            <li>{props.commentInfo.content}</li>
        </div>
    )
}
