'use client'
import dynamic from 'next/dynamic'
import { SlOptions } from "react-icons/sl";
import '../styles/components/profilebar.css'
import Loading from '@/app/loading';
// import Profile from "./Profile";

const Profile = dynamic(()=>import("./Profile"),{
    loading : ()=> <p>loading</p>
})

const Profilemenu = ()=>{
    return (
        <div className="profile_c">
            <div className="profile_logo">
                <Profile  width={35} height={35} />
            </div>
            <div className="profile_details">
                <div className="profile_name">
                    <p>Sv - Prince</p>
                    <p className="profile_username">
                        @svprnce
                    </p>
                </div>
            </div>
            <div className="profile_actions">
                <SlOptions/>
            </div>
        </div>
    )
}

export default Profilemenu