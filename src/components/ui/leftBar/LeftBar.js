import Bike from "../../../assets/img/leftBar/bike.svg";
import Musculation from "../../../assets/img/leftBar/musculation.svg";
import Natation from "../../../assets/img/leftBar/natation.svg";
import Yoga from "../../../assets/img/leftBar/yoga.svg";
import "./LeftBar.scss";
import LeftSvg from "./LeftSvg";

const LeftBar = () => {
  const imgArr = [Yoga, Natation, Bike, Musculation];

  return (
    <div className="left-bar">
      <div className="layout-icon">
        <div>
          {imgArr.map((item, index) => (
            <LeftSvg key={index} image={item} />
          ))}
        </div>
      </div>
      <div className="left-title">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default LeftBar;
