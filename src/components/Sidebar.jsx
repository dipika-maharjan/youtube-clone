import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { GrTrophy } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

const Sidebar = () => {
    const sidebarItems = [
        {
            id:1,
            name:"Home", 
            icon:<GoHome/>
        },
        {
            id:2,
            name:"Shorts", 
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:"Subscriptions", 
            icon:<MdOutlineSubscriptions/>
        },
    ]

        const sidebarItems2 = [
        {
            id:1,
            name:"History", 
            icon:<GoHistory />
        },
        {
            id:2,
            name:"Playlists", 
            icon:<MdOutlinePlaylistPlay />
        },
        {
            id:3,
            name:"Your videos", 
            icon:<BiSolidVideos />
        },
        {
            id:4,
            name:"Watch later", 
            icon:<MdOutlineWatchLater/>
        },
        {
            id:5,
            name:"Liked videos", 
            icon:<AiOutlineLike/>
        },
    ]

        const sidebarItems3 = [
        {
            id:1,
            name:"Trending", 
            icon:<FaArrowTrendUp />
        },
        {
            id:2,
            name:"Music", 
            icon:<IoMusicalNotesOutline />
        },
        {
            id:3,
            name:"Gaming", 
            icon:<SiYoutubegaming />
        },
        {
            id:4,
            name:"Sports", 
            icon:<GrTrophy/>
        }
    ]


        const sidebarItems4 = [
        {
            id:1,
            name:"YouTube Premium", 
            icon:<FaYoutube />
        },
        {
            id:2,
            name:"YouTube Studio", 
            icon:<SiYoutubestudio />
        },
        {
            id:3,
            name:"YouTube Music", 
            icon:<SiYoutubemusic />
        },
        {
            id:4,
            name:"YouTube Kids", 
            icon:<SiYoutubekids/>
        }
    ]
        
        const sidebarItems5 = [
        {
            id:1,
            name:"Settings", 
            icon:<IoSettingsOutline />
        },
        {
            id:2,
            name:"Report history", 
            icon:<MdOutlinedFlag />
        },
        {
            id:3,
            name:"Help", 
            icon:<IoMdHelpCircleOutline />
        },
        {
            id:4,
            name:"Send feedback", 
            icon:<RiFeedbackLine/>
        }
    ]

  return (
    <div className='px-4 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-20'>
        {/* Home */}
        <div className='space-y-3 items-center'>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                            <div className='text-xl cursor-pointer'>{item.icon}</div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }

        </div>
        <br />
        <hr/>

        {/* You */}
        <div className='mt-4 space-y-3 items-center'>
            <div className='flex items-center space-x-1'>
                <h1 className='font-semibold'>You</h1>
                <MdChevronRight size='25px'/>
            </div>
            {
                sidebarItems2.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                            <div className='text-xl cursor-pointer'>{item.icon}</div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }

        </div>
        <br />
        <hr/>

                {/* Explore */}
        <div className='mt-4 space-y-3 items-center'>
            <div className='flex items-center space-x-1'>
                <h1 className='font-semibold'>Explore</h1>
            </div>
            {
                sidebarItems3.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                            <div className='text-xl cursor-pointer'>{item.icon}</div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }

        </div>
        <br />
        <hr/>

            {/* More from YouTube */}
        <div className='mt-4 space-y-3 items-center'>
            <div className='flex items-center space-x-1'>
                <h1 className='font-semibold'>More from YouTube</h1>
            </div>
            {
                sidebarItems4.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                            <div className='text-xl cursor-pointer text-red-500'>{item.icon}</div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }

        </div>
        <br />
        <hr/>
        
            {/* More section */}
        <div className='mt-4 space-y-3 items-center'>
            <div className='flex items-center space-x-1'>
            </div>
            {
                sidebarItems5.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                            <div className='text-xl cursor-pointer'>{item.icon}</div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }

        </div>
        <br />
        <hr/>
        <div className='text-xs font-semibold text-gray-600 mt-3' >
            <span>About Press Copyright <br /> Contact us Creators Advertise <br /> Developers <br /> <br /> </span>
            <span>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features</span>

            <br />
            <p className='mt-4 text-gray-400'>© 2025 Dipika Maharjan</p>
        </div>
      
    </div>
  )
}

export default Sidebar
