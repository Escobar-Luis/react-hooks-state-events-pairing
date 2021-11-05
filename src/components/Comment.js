import React from 'react'
import { useState } from 'react'

function Comment({comment, onDeleteComment}) {

    const [upvotes, setUpVotes] = useState(0)
    const [downvotes, setDownVotes] = useState(0)

    function handleUpVotes () {
        setUpVotes(upvotes + 1)
    }
    function handleDownVotes () {
        setDownVotes(downvotes + 1)
    } 

    function handleDelete() {
        onDeleteComment(comment.id)
    }
    return (
        <div className='comment-wrapper' key={comment.id}>
    <h3>{comment.user}</h3>
    <p>{comment.comment}</p>
    <button onClick={handleUpVotes}>{upvotes}👍</button>
    <button onClick={handleDownVotes}>{downvotes}👎</button>
    <button onClick={handleDelete}>Remove Button</button>
        </div>
    )
}

export default Comment
