import { IoClose } from "react-icons/io5";
import "./RelatedAccounts.css";
import { FaChevronRight } from "react-icons/fa";
const RelatedAccounts = () => {
  return (
    <>
      <h4 className="accounts">Related Accounts</h4>
      <div>
        <div className="related_accounts_container">
          <FaChevronRight className="see_more" />

          <div className="like_slider_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download.jpg" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
          <div className="like_slider_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download2.jpg" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
          <div className="like_slider_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download1.jpg" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
          <div className="like_slider_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download.png" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
          <div className="like_slider_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download3.jpg" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
          <div className="like_slider_container last_container">
            <IoClose className="close_button" />
            <div className="image_box">
              <img src="/download.png" />
            </div>
            <div className="info_box_slider">
              <h5>Shoxa_borziy_of...</h5>
              <p>Shohrux Bozo..</p>
              <button className="follow_related_button">Follow</button>
            </div>
          </div>
        </div>
        <div className="for_center">
          <p className="btn_see_more">See more videos</p>
        </div>
      </div>
    </>
  );
};

export default RelatedAccounts;
