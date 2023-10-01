import "./sideBar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData"
import Friend from "../Friend/Friend";

export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBarWrapper">
            <ul className="sideBarList">
                <li className="sideBarListItem">
                    <RssFeedIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <ChatIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Chats</span>
                </li>
                <li className="sideBarListItem">
                    <PlayCircleIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Videos</span>
                </li>
                <li className="sideBarListItem">
                    <GroupIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Group</span>
                </li>
                <li className="sideBarListItem">
                    <BookmarkIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Bookmarks</span>
                </li>
                <li className="sideBarListItem">
                    <HelpOutlineIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Questions</span>
                </li>
                <li className="sideBarListItem">
                    <WorkOutlineIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Jobs</span>
                </li>
                <li className="sideBarListItem">
                    <EventIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Events</span>
                </li>
                <li className="sideBarListItem">
                    <SchoolIcon className="sideBarIcon"/>
                    <span className="sideBarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sideBarBtn">Show more</button>
            <hr className="sideBar_hr"/>
            <ul className="sideBarFriendList">
                {Users.map(user => (
                    <Friend key={user.id} user={user}/>
                ))}
            </ul>

        </div>
    </div>
  )
}
