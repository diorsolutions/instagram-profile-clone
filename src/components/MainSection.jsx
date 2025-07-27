import { MdVerified } from "react-icons/md";
import "./MainSection.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";

const MainSection = () => {
  return (
    <>
      <div className="parent_main_content">
        <div className="avatar_image">
          <img className="bordered" width={250} src="/download.png" />
        </div>
        <div className="all_recourses">
          <div className="followers_section">
            <div className="username">
              <p>
                LoremIpsum <MdVerified />
              </p>
              <div className="btns">
                <button className="btn follow">Follow</button>
                <button className="btn message">Message</button>
                <HiDotsHorizontal className="for_hover" />
              </div>
            </div>
            <div className="real_followers">
              <div className="box posts">
                <h4>405</h4>
                <p>posts</p>
              </div>
              <div className="box follows">
                <h4>1.5</h4>
                <p>followers`</p>
              </div>
              <div className="box following">
                <h4>1</h4>
                <p>following</p>
              </div>
            </div>
          </div>
          <div className="info_section">
            <h3>Lorem Ipsum</h3>
            <span>AI larni ajali</span>
            <ul>
              <li>Xiva shaxri filiali: 99238819</li>
              <li>Xozarasp shaxridagi filial: 99238819</li>
              <li>Urganch shahar filiali: 99238819</li>
              <li>Xonqa shaxri: 99238819</li>
              <div className="link">
                <IoIosLink />
                <a href="@">https://www.diorsolutions,site</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
