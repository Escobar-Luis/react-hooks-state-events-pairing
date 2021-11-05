import React from 'react'
import { useState } from 'react'
import Comment  from './Comment'

function Comments({showC, video}) {

    const [search, setSearch] = useState('')
    const [comments, setComments] = useState(video.comments)
    const[sort, setSort] = useState(true)

    const visibleComments = comments.filter((comment) =>
    comment.user.includes(search))

    const comment = visibleComments.map((comment) => 
    showC ?
    <Comment comment={comment} key={comment.id} onDeleteComment={onDeleteComment}/>: null)
    

    function onDeleteComment (deletedComment) {
        setComments(visibleComments.filter((comment) => comment.id !== deletedComment))
    }
    

    function reverseComment () {
        setSort(!sort)
        return comments.reverse()
    }

    

    return (
        <div className="comment container">
            <div className="show-comments">
                <div className="number-of-comments">
                    <h1>
                        {video.comments.length} Comments
                    </h1>
                </div>
                <div className='search-bar'>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" value={search}></input>
                    <button onClick={reverseComment}>{sort ? 'Sort by Date ⬆️' : 'Sort by Date ⬇️ '} </button>
                </div>
                {comment}
            </div>
        </div>
    )
}

export default Comments
