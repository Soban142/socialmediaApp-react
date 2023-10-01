import "./friend.css"

const Friend = ({user}) => {
  return (
    <li className="sideBarFriend">
        <img src={user.profilePicture} alt="" className="sideBarFriendImage"/>
        <span className="sideBarFriendName">{user.username}</span>
    </li>
  )
}

export default Friend