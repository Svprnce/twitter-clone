'use client'
import Image from "next/image"
import '../styles/components/sidemenu.css'
import { IoMdHome } from "react-icons/io";
const Sidemenu = () => {
    return (
        <div className="sidemenu_c">
            <div className="sidemenu_logo">
                <Image
                className="sidemenu_logo_img"
                src='/x-dark.png'
                height={30}
                width={30}
                />
            </div>
            <ul >
                <li><IoMdHome className="nav_icons"/>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Home</li>
                <li>Explore</li>
            </ul>
            <button>Post</button>
        </div>
    )
}

export default Sidemenu