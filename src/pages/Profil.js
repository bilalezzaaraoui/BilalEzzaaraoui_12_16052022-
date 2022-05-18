import { Fragment } from "react";
import Header from "../components/layout/Header";
import LeftBar from "../components/ui/leftBar/LeftBar";
import InfoDailyActivity from "../components/ui/infoDailyActivity/InfoDailyActivity";
import InfoMenu from "../components/ui/infoMenu/InfoMenu";
import InfoActivity from "../components/ui/infoActivity/InfoActivity";
import Apple from "../assets/img/infoMenu/apple.svg";
import Cheeseburger from "../assets/img/infoMenu/cheeseburger.svg";
import Chicken from "../assets/img/infoMenu/chicken.svg";
import Energy from "../assets/img/infoMenu/energy.svg";
import "./Profil.scss";

const Profil = (props) => {
  const infoMenu = [
    { image: Energy, text: "1,930kCal", title: "Calories", color: "#FBEAEA" },
    { image: Chicken, text: "155g", title: "Proteines", color: "#E9F4FB" },
    { image: Apple, text: "290g", title: "Glucides", color: "#FBF6E5" },
    { image: Cheeseburger, text: "50g", title: "Lipides", color: "#FBEAEF" },
  ];
  return (
    <Fragment>
      <Header />
      <div className="flex-layout">
        <LeftBar />
        <div className="user-layout">
          <h1>
            Bonjour <span>Thomas</span>
          </h1>

          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

          <div className="box-layout">
            <div className="graph-layout">
              <div className="daily-activity">
                <InfoDailyActivity />
              </div>
              <div className="info-activity">
                <InfoActivity />
                <InfoActivity />
                <InfoActivity />
              </div>
            </div>
            <div className="info-layout">
              {infoMenu.map((item, index) => (
                <InfoMenu
                  key={index}
                  height="125px"
                  color={item.color}
                  energy={item.text}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profil;
