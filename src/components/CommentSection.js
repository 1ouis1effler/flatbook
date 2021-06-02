import React from 'react'

export default function CommentSection(props) {
    return (
        <div>
            <li>{props.commentInfo.content}</li>
        </div>
    )
}
