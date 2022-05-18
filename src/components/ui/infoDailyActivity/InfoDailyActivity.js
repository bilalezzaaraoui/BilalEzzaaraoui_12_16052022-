import * as Request from "../../../assets/data/HttpRequest";
import "./InfoDailyActivity.scss";

const InfoDailyActivity = (props) => {
  Request.GetAllUserInformation();
  Request.GetUserPerformance();
  return <div className="info-daily-activity-box"></div>;
};

export default InfoDailyActivity;
