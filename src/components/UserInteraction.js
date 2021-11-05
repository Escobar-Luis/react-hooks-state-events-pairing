import React from 'react'
import { useState } from 'react'

function UserInteraction({video, onCommentBtnClick, showC}) {
    const [upvotes, setUpVotes] = useState(video.upvotes)
    const [downvotes, setDownVotes] = useState(video.downvotes)

    function handleUpVotes () {
        setUpVotes(upvotes + 1)
    }
    function handleDownVotes () {
        setDownVotes(downvotes + 1)
    }
            return (
        <div className="user-input">
            <div className="vote-btns">
                <button onClick={handleUpVotes}>{upvotes}👍</button>
                <button onClick={handleDownVotes}>{downvotes}👎</button>
            </div>
            <div className="comment-btn">
                <button onClick={onCommentBtnClick}>{showC ? 'Hide Comments' : 'Show Comments' }</button>
            </div>
        </div>
    )
}

export default UserInteraction