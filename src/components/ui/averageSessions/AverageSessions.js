import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "./AverageSessions.scss";

const AverageSessions = (props) => {
  const lenght = props.data;
  const day = ["L", "M", "M", "J", "V", "S", "D"];
  let counter = 0;
  const arrCounter = lenght.map((item) => {
    return {
      ...item,
      weekDay: day[counter++],
    };
  });

  return (
    <div className="average-sessions-box">
      <div className="average-sessions-graph__title">
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={arrCounter}
          margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="1" horizontal="" vertical="" />
          <XAxis
            dataKey="weekDay"
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.8)"
            axisLine={false}
            tick={{
              fontSize: 14,
              fontWeight: 500,
            }}
            padding={{ left: 15, right: 15 }}
          />

          <YAxis
            hide={true}
            domain={["dataMin-20", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            itemStyle={{
              color: "black",
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: "none" }}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 70,
              height: 100,
            }}
          />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            unit="min"
            dot={false}
            activeDot={{
              fill: "white",
              stroke: "white",
              strokeOpacity: 0.2,
              strokeWidth: 15,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;

AverageSessions.propTypes = {
  data: PropTypes.array,
};
