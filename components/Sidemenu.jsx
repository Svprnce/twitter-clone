'use client'

import Image from "next/image"
import Link from 'next/link'
import '../styles/components/sidemenu.css'
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
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
                <li><IoMdHome className="nav_icons"/><Link href='/'>Home</Link></li>
                <li>Explore</li>
                <li><IoIosNotifications className="nav_icons" /><Link href='/notification'>Notification</Link></li>
                <li><BiSolidMessage className="nav_icons" /><Link href='/message'>Message</Link></li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li><IoPersonSharp className="nav_icons"/><Link href='/profile'>Profile</Link></li>
                <li>Explore</li>
            </ul>
            <button>Post</button>
        </div>
    )
}

export default Sidemenu