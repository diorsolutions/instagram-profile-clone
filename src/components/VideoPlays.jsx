import { BiSolidLike } from "react-icons/bi";
import "./VideoPlays.css";
import { FaComment } from "react-icons/fa";

const VideoPlays = () => {
  return (
    <div>
      <div className="grid_templates">
        <div className="container_video_imgs">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              3.1k
            </p>
            <p>
              <FaComment className="comment_button" />
              331
            </p>
          </div>
        </div>
        <div className="container_video_imgs container_video_imgs_second">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              4k
            </p>
            <p>
              <FaComment className="comment_button" />
              31
            </p>
          </div>
        </div>
        <div className="container_video_imgs container_video_imgs_third">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              1k
            </p>
            <p>
              <FaComment className="comment_button" />
              21
            </p>
          </div>
        </div>
        <div className="container_video_imgs container_video_imgs_forth">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              1.9k
            </p>
            <p>
              <FaComment className="comment_button" />
              22
            </p>
          </div>
        </div>
        <div className="container_video_imgs container_video_imgs_fivth">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              1.4k
            </p>
            <p>
              <FaComment className="comment_button" />
              231
            </p>
          </div>
        </div>
        <div className="container_video_imgs container_video_imgs_sixth">
          <div className="container_like_comment">
            <p>
              <BiSolidLike className="like_button" />
              24k
            </p>
            <p>
              <FaComment className="comment_button" />
              1231
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlays;
