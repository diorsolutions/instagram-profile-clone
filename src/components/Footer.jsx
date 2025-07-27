import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer_ended">
      <div className="meta_tags">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Meta Verified</a>
      </div>
      <div className="copy_writing">
        <select>
          <option value="English">English</option>
          <option value="Russian">Russian</option>
          <option value="Uzbek">Uzbek</option>
        </select>
        <p>© 2025 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Footer;
