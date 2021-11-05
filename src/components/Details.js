import React from 'react'
import { useState } from 'react'
import UserInteraction from './UserInteraction'
import Comments from './Comments'

function Details({video}) {

    const [showC, setShowC] = useState('false')

    function handleClick () {
        setShowC(!showC)
    }



    return (
        <div className="detail-container">
            <div className="video-title">
                <h1>{video.title}</h1>
                <div className="video-stats">
                    <p>Views {video.views.toLocaleString()} | Uploaded {video.createdAt}</p>
                    <UserInteraction video={video} onCommentBtnClick={handleClick} showC={showC}/>
                    <Comments video={video} showC={showC}/>
                </div>
            </div>
        </div>
    )
}

export default Details
