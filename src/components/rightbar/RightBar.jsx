import "./rightBar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online.jsx"
// import Profile from "../../pages/profile/Profile"

export default function RightBar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthDayContainer">
          <img src="" alt="" className="birthDayImage"/>
          <span className="birthDayText">
            <b>Salman</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightBarAd" src="" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map(user => (
            <Online key={user.id} user={user}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
    <>
      <h4 className="rightBarTitle">User information</h4>
      <div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City: </span>
          <span className="rightBarInfoValue">Karachi</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From: </span>
          <span className="rightBarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship: </span>
          <span className="rightBarInfoValue">Single</span>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollwings">
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
          <div className="rightBarFollowing">
            <img src="" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Soban</span>
          </div>
        </div>
      </div>
    </>
  )}
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
       {profile ? <ProfileRightBar/> : <HomeRightBar />}
      </div>
    </div>
  )
}
