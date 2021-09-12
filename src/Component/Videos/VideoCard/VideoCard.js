import React from 'react'

import './VideoCard.css'

import { Skeleton } from '@material-ui/lab'

function VideoCard() {

    const randomNum = (max) => {
        return Math.floor(Math.random() * max);
    }

    const randomTime = () => {
        return Math.random() <= 0.5 ? "hours" : "years";
    }

    return (
        <div className="videoCard">
            <Skeleton variant="rect" width={300} height={180} />
            <div className="videoCard__top">
                <div className="videoCard__channelPic">
                    <Skeleton variant="circle" width={40} height={40} />
                </div>
                <div className="videoCard__text">
                    <div className="videoCard__title">
                        <p>Made By Shahab Athar</p>
                    </div>
                    <div className="videoCard__channel">
                        <p>Shahab Athar</p>
                    </div>
                    <div className="videoCard__details">
                        <div className="videoCard__views">
                            {randomNum(999)}K Views
                        </div>
                        <div className="videoCard__timeStamp">
                            {randomNum(12) + ' ' + randomTime() + ' ago'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
