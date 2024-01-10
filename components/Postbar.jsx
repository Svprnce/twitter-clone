'use client'

import '../styles/components/postbar.css'
import Profile from './Profile'
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlineGifBox } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Postbar = () => {
    return (
        <div className="postbar_c">
            <div className="postbar_profile">
                <Profile width={37} height={37}/>
            </div>
            <div className="postbar_area">
                <input type="text" placeholder="What is Happening ? !" />
                <div className="postbar_options_c">
                    <div className="postbar_option">
                        <MdAddPhotoAlternate className='postbar_icons'/>
                        <MdOutlineGifBox className='postbar_icons'/>
                        <MdEmojiEmotions className='postbar_icons'/>
                        <FaLocationDot className='postbar_icons'/>
                    </div>
                    <div className="postbar_btn">
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postbar