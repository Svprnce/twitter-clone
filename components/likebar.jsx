import '../styles/components/likebar.css'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { LuAreaChart } from "react-icons/lu";
import { CiSaveUp2 } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";

const Likebar = () => {
    return (
        <div className="likebar_c">
            <div className="likebar_like">
                <ul className='likebar_like_ul'>
                    <li ><FaRegComment /><p className='like_count_text'>76</p></li>
                    <li><BiRepost /><p className='like_count_text'>1</p></li>
                    <li><CiHeart /><p className='like_count_text'>71</p></li>
                    <li><LuAreaChart /><p className='like_count_text'>5.1k</p></li>
                </ul>
            </div>
            <div className="likebar_save">
                <p><CiSaveUp2 /></p>
                <p><IoDownloadOutline /></p>
            </div>
        </div>
    )
}
export default Likebar