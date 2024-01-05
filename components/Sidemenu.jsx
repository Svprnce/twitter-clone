'use client'
import Image from "next/image"

const Sidemenu = () => {
    return (
        <div className="sidemenu_c">
            <div className="sidemenu_logo">
                <Image
                src='/x-dark.png'
                height={50}
                width={50}
                />
            </div>
            <ul >
                <li>Home</li>
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