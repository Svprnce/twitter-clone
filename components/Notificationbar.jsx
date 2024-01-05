const Notificationbar = ()=>{
    return (
        <div className="notificationbar_c">
            <div className="notification_category">
                <ul>
                    <li>All</li>
                    <li>Verified</li>
                    <li>Mentions</li>
                </ul>
            </div>
            <div className="notification_area">
            <div className="notification">
                <div className="notification_icon">
                    {/* notification like heart, mention -> img */}
                </div>
                <div className="notification_details">
                    {/* notification profile img */}
                    <p><span>Sv Prince</span> followed you</p>
                </div>
            </div>
            <div className="notification">
                <div className="notification_icon">
                    {/* notification like heart, mention -> img */}
                </div>
                <div className="notification_details">
                    {/* notification profile img */}
                    <p>There was a login to your account <span>@sv_prnce</span> from a new device on 02 Jan 2024. Review it now.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Notificationbar