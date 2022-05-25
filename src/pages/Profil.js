import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Request from "../assets/data/HttpRequest";
import Header from "../components/layout/Header";
import LeftBar from "../components/ui/leftBar/LeftBar";
import User from "../components/class/User";
import InfoDailyActivity from "../components/ui/infoDailyActivity/InfoDailyActivity";
import InfoMenu from "../components/ui/infoMenu/InfoMenu";
import AverageSessions from "../components/ui/averageSessions/AverageSessions";
import UserPerformance from "../components/ui/userPerformance/UserPerformance";
import UserScore from "../components/ui/userScore/UserScore";
import "./Profil.scss";

const Profil = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const number = id;
  console.log(number);
  useEffect(() => {
    const fetchData = async (number) => {
      const userInfoObject = await Request.GetAllUserInfo(number);
      const userPerformanceObject = await Request.GetUserPerformance(number);
      const userActivity = await Request.GetUserActivity(number);
      const userAverageSessions = await Request.GetUserAverageSessions(number);

      const dataModel = {
        userInfos: userInfoObject,
        userPerformance: userPerformanceObject,
        userActivity: userActivity,
        userAverageSessions: userAverageSessions,
      };

      console.log(dataModel);

      const userData = {
        id: dataModel.userInfos.id,
        firstName: dataModel.userInfos.userInfos.firstName,
        lastName: dataModel.userInfos.userInfos.lastName,
        age: dataModel.userInfos.userInfos.age,
        score: dataModel.userInfos.todayScore || dataModel.userInfos.score,
        nutrition: {
          calorie: dataModel.userInfos.keyData.calorieCount,
          protein: dataModel.userInfos.keyData.proteinCount,
          carbs: dataModel.userInfos.keyData.carbohydrateCount,
          lipid: dataModel.userInfos.keyData.lipidCount,
        },

        sessions: dataModel.userActivity.sessions,
        averageSessions: dataModel.userAverageSessions.sessions,
        performance: {
          data: dataModel.userPerformance.data,
          kind: dataModel.userPerformance.kind,
        },
      };

      const user = new User(userData);

      setData([user]);
    };

    fetchData(number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.length > 0) {
    const finalData = data[0];
    return (
      <Fragment>
        <Header />
        <div className="flex-layout">
          <LeftBar />
          <div className="user-layout">
            <h1 className="title">
              Bonjour <span>{finalData.firstName}</span>
            </h1>

            <p className="success">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>

            <div className="box-layout">
              <div className="graph-layout">
                <div className="daily-activity">
                  <InfoDailyActivity sessions={finalData.sessions} />
                </div>
                <div className="info-activity">
                  <AverageSessions
                    user={number}
                    data={finalData.averageSessions}
                  />
                  <UserPerformance data={finalData.performance} />
                  <UserScore data={finalData.score} />
                </div>
              </div>
              <div className="info-layout">
                {finalData.nutrition.map((item, index) => (
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
  }
};

export default Profil;
