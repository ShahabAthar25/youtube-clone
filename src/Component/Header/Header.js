import React from 'react'

import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import { Avatar } from '@material-ui/core'

import { ReactComponent as YoutubeLogo }from '../../Images/youtube.svg'

function Header({ setOpen, open }) {

    console.log(!open)

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon onClick={() => setOpen(!open)} />
                <YoutubeLogo className="header__youtubeLogo" style={{ height: "20px" }} />
            </div>
            <div className="header__center">
                <div className="header__search">
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
                <MicIcon />
            </div>
            <div className="header__right">
                <div className="header__icons">
                    <VideoCallOutlinedIcon />
                    <AppsOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                </div>
                <Avatar className="header__avatar" />
            </div>
        </div>
    )
}

export default Header
