import '../styles/notification/category.css'
import '../styles/notification/notificationbar.css'
import { SlUserFollowing } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Profile from './Profile'

export const Notificationcategory = () => {
    return (
        <div className="notification_category">
            <h2>Notification</h2>
            <ul>
                <li className='li_selected'>All</li>
                <li>Verified</li>
                <li>Mentions</li>
            </ul>
        </div>

    )
}
const Notificationbar = () => {
    return (
        <div className="notificationbar_c">
            <div className="notification_area">
                <div className="notification">
                    <div className="notification_icon">
                    <SlUserFollowing />                    </div>
                    <div className="notification_details">
                        <Profile width={35} height={35}/>
                        <p><span className='profile_name'>Sv Prince</span> followed you</p>
                    </div>
                </div>
                <div className="notification">
                    <div className="notification_icon">
                    <IoSettingsSharp />                    </div>
                    <div className="notification_details">
                        <p>There was a login to your account <span className='user_name'>@sv_prnce</span> from a new device on 02 Jan 2024. Review it now.</p>
                    </div>
                </div>
                <div className="notification">
                    <div className="notification_icon">
                    <FaHeart />
                    </div>
                    <div className="notification_details">
                    <p><span className='profile_name'>Sv Prince</span> Liked you post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notificationbar