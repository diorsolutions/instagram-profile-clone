import { BsGrid3X3 } from "react-icons/bs";
import "./VideosSection.css";
import { TbVideoPlus } from "react-icons/tb";
import { LuSquareUser } from "react-icons/lu";

const VideosSection = () => {
  return (
    <div>
      <div className="VideButton">
        <div className="underline">
          <BsGrid3X3 className="icons_size actives" />
          <div className="underLinder"></div>
        </div>
        <TbVideoPlus className="icons_size" />
        <LuSquareUser className="icons_size" />
      </div>
    </div>
  );
};

export default VideosSection;
