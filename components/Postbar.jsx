const Postbar = ()=>{
    return(
        <div className="postbar_c">
            <div className="postbar_profile">
                {/* profile image */}
            </div>
            <div className="postbar_area">
                <input type="text"  placeholder="What is Happening ? !"/>
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