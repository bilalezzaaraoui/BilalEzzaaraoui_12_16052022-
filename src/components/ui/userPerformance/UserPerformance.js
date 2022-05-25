import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./UserPerformance.scss";

const UserPerformance = (props) => {
  const data = props.data.data;

  const activityInOrder = [
    ["1", "Cardio"],
    ["2", "Energie"],
    ["3", "Endurance"],
    ["4", "Force"],
    ["5", "Vitesse"],
    ["6", "Intensité"],
  ];

  const result = [];
  data.forEach((item) => {
    activityInOrder.find((element) => {
      if (item.kind === Number(element[0])) {
        result.push({ value: item.value, kind: element[1] });
        return true;
      }
    });
  });

  const largeur = window.innerWidth;

  return (
    <div className="user-performance-box">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={result} outerRadius={largeur > 1340 ? 70 : 50}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fill: "white",
              fontSize: `${largeur > 1340 ? 14 : 8}`,
              fontWeight: 500,
            }}
            dy={2}
            tickSize={largeur > 1340 ? 10 : 10}
          />
          <Radar
            name="performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserPerformance;
