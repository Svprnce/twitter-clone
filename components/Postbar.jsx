import Image from 'next/image'
import '../styles/components/postbar.css'
const Postbar = () => {
    return (
        <div className="postbar_c">
            <div className="postbar_profile">
                <Image
                    className="profile_logo_img"
                    src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                    width={37}
                    height={37}
                />
            </div>
            <div className="postbar_area">
                <input type="text" placeholder="What is Happening ? !" />
                <div className="postbar_options_c">
                    <div className="postbar_option">
                        {/* post emoj options -- component */}
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