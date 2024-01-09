import Image from 'next/image'
import '../styles/components/followbar.css'
const Followbar = () => {
    return (
        <div className="followbar_c">
            <h2>Who to Follow</h2>
            <div className="follow_div">
                <div className="follow_user_detail">
                <div className="follow_profile">
                    <Image
                        className="profile_logo_img"
                        src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                        width={45}
                        height={45} />
                </div>
                <div className="follow_profile_details">
                    <h4>Ruban</h4>
                    <p className="follow_profile_username"> @ruban</p>
                </div>
                </div>
                <div className="follow_btn">
                    <button>Button</button>
                </div>
            </div>
            <div className="follow_div">
                <div className="follow_user_detail">
                <div className="follow_profile">
                    <Image
                        className="profile_logo_img"
                        src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                        width={45}
                        height={45} />
                </div>
                <div className="follow_profile_details">
                    <h4>Ruban</h4>
                    <p className="follow_profile_username"> @ruban</p>
                </div>
                </div>
                <div className="follow_btn">
                    <button>Button</button>
                </div>
            </div>
            <div className="follow_div">
                <div className="follow_user_detail">
                <div className="follow_profile">
                    <Image
                        className="profile_logo_img"
                        src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                        width={45}
                        height={45} />
                </div>
                <div className="follow_profile_details">
                    <h4>Ruban</h4>
                    <p className="follow_profile_username"> @ruban</p>
                </div>
                </div>
                <div className="follow_btn">
                    <button>Button</button>
                </div>
            </div>
            <div className="follow_div">
                <div className="follow_user_detail">
                <div className="follow_profile">
                    <Image
                        className="profile_logo_img"
                        src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                        width={45}
                        height={45} />
                </div>
                <div className="follow_profile_details">
                    <h4>Ruban</h4>
                    <p className="follow_profile_username"> @ruban</p>
                </div>
                </div>
                <div className="follow_btn">
                    <button>Button</button>
                </div>
            </div>
        </div>
    )
}

export default Followbar