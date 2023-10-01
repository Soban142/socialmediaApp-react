import "./home.css"
import TopBar from "../../components/topBar/TopBar.jsx"
import SideBar from "../../components/sidebar/SideBar.jsx"
import RightBar from "../../components/rightbar/RightBar.jsx"
import Feed from "../../components/feed/Feed.jsx"
// import Profile from "../profile/Profile"


export default function Home() {
    return(
        <>
            <TopBar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}