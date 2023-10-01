import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="" alt="" className="shareProfileImg"/>
                <input type="text" className="shareInput" placeholder="What's in your mind"/>
            </div>
            <hr className="share_hr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div htmlColor="green" className="shareOption">
                        <LocationOnIcon className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div htmlColor="goldenrod" className="shareOption">
                        <EmojiEmotionsIcon className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </div>
    </div>
  )
}
