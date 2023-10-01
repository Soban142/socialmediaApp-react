import "./post.css"
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from "react";


export default function Post({post}) {
    console.log(useState(1))
  const [likeCount, setLikeCount] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  
  const likeHandler = () => {
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImage"/>
                    <span className="postUserName">
                        {Users.filter(u => u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img src={post.photo} alt="" className="postImage"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assests/like_dislikeImages/like.png" onClick={likeHandler} alt="" className="likeIcon"/>
                    <img src="assests/like_dislikeImages/love.png" onClick={likeHandler} alt="" className="likeIcon"/>
                    <span className="postLikeCounter">{likeCount} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
