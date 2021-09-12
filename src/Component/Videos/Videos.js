import React from 'react'

import './Videos.css'

import VideoCard from './VideoCard/VideoCard'
import Tags from './Tags/Tags'


function Videos() {
    return (
        <div  className="videos">
            <div className="video__tag">
                <Tags text="All" />
                <Tags text="Gaming" />
                <Tags text="Programming" />
                <Tags text="Computers" />
                <Tags text="Boxing" />
                <Tags text="Golf" />
                <Tags text="Cricket" />
                <Tags text="FootBall" />
                <Tags text="Hockey" />
                <Tags text="Ice Hockey" />
                <Tags text="Basketball" />
                <Tags text="Running" />
                <Tags text="Volleyball" />
                <Tags text="Badminton" />
                <Tags text="Olympics" />
            </div>
            <div className="video__cards">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default Videos
