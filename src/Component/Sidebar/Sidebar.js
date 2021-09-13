import React from 'react'

import './Sidebar.css'

import SidebarOption from './SidebarOption/SidebarOption'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';


function Sidebar({ open }) {
    return (
        <div className={open ? 'sidebar' : 'hidden'}>
            <SidebarOption Icon={HomeOutlinedIcon} text="Home" />
            <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
            <SidebarOption Icon={SubscriptionsOutlinedIcon} text="Subscriptions" />
            <div className="seprater"></div>
            <SidebarOption Icon={VideoLibraryOutlinedIcon} text="Library" />
            <SidebarOption Icon={UpdateOutlinedIcon} text="History" />
            <SidebarOption Icon={ShopOutlinedIcon} text="Your Videos" />
            <SidebarOption Icon={WatchLaterOutlinedIcon} text="Watch Later" />
            <div className="seprater"></div>
        </div>
    )
}

export default Sidebar
