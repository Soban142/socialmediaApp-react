import "./TopBar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBar-left">
        <span className="logo">
          Social-media-react
        </span>
      </div>
      <div className="topBar-center">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input type="text" className="searchInput" placeholder="Search for friend, post or video"/>
        </div>
      </div>
      <div className="topBar-right">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
          <span className="topBarLink"></span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <ChatIcon />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="" alt="" className="topBarImage"/>
      </div>
    </div>
  )
}
