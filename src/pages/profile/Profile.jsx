import "./profile.css"
import TopBar from "../../components/topBar/TopBar.jsx"
import SideBar from "../../components/sidebar/SideBar.jsx"
import RightBar from "../../components/rightbar/RightBar.jsx"
import Feed from "../../components/feed/Feed.jsx"

export default function Profile() {
  return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="" alt="" className="profileCoverImage"/>
                            <img src="" alt="" className="profileUserImage"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Soban</h4>
                            <h4 className="profileInfoDesc">Description from database</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
