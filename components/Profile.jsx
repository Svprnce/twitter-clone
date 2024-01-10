'use client'
import Image from 'next/image'

const Profile =({width, height})=>{
    return(
        <Image
                    className="profile_logo_img"
                    src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRj16fhcg1gEoqpLO1a4F4nuTGZojXYDrHJ-0uOXssQFqK41mI'
                    width={width}
                    height={height}
                    alt='image'
                />
    )
}

export default Profile