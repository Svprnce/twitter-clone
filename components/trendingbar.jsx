import { SlOptions } from "react-icons/sl";
import Link from 'next/link'
import '../styles/components/trendingbar.css'
const Trendingbar = ()=>{
    return(
        <div className="trendingbar_c"> 
        <h2>What's Happening</h2> 
                <div className="trending">
                    <div className="trending_content">
                        <p>Technology</p>
                        <h3><span>#</span>Next js</h3>
                        <p>2168 Posts</p>
                        </div>
                    <div className="trending_option">
                        <SlOptions/>
                    </div>

                </div>
                <div className="trending">
                    <div className="trending_content">
                        <p>Technology</p>
                        <h3><span>#</span>Next js</h3>
                        <p>2168 Posts</p>
                        </div>
                    <div className="trending_option">
                        <SlOptions/>
                    </div>

                </div>
                <div className="trending">
                    <div className="trending_content">
                        <p>Technology</p>
                        <h3><span>#</span>Next js</h3>
                        <p>2168 Posts</p>
                        </div>
                    <div className="trending_option">
                        <SlOptions/>
                    </div>

                </div>
                <div className="trending">
                    <div className="trending_content">
                        <p>Technology</p>
                        <h3><span>#</span>Next js</h3>
                        <p>2168 Posts</p>
                        </div>
                    <div className="trending_option">
                        <SlOptions/>
                    </div>

                </div>
                <p><Link href=''>Show more</Link></p>
        </div>
    )
}

export default Trendingbar