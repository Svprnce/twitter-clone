import { SlOptions } from "react-icons/sl";
import '../styles/components/profilebar.css'
import Image from 'next/image'
const Profilemenu = ()=>{
    return (
        <div className="profile_c">
            <div className="profile_logo">
                <Image
                className="profile_logo_img"
                src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                width={35}
                height={35}
                />
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