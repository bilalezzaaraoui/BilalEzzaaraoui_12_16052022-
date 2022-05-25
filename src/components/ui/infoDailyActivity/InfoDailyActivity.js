import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import Circle from "../circle/Circle";

import "./InfoDailyActivity.scss";

const InfoDailyActivity = (props) => {
  // Compteur
  const lenght = props.sessions;
  let counter = 0;
  const arrCounter = lenght.map((item) => {
    return {
      ...item,
      id: ++counter,
    };
  });

  return (
    <div className="info-daily-activity-box">
      <div className="info-activity-title">
        <div className="daily-activities">
          <h3>Activité quotidienne</h3>
        </div>
        <div className="body-info">
          <div className="first">
            <Circle color="#282D30" />
            <p>Poids (kg)</p>
          </div>
          <div className="second">
            <Circle color="#E60000" />
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div className="chart-layout">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={arrCounter}
            margin={{
              top: 0,
              right: 30,
              left: 30,
              bottom: 0,
            }}
            barGap={8}
            barCategoryGap="35%"
          >
            <CartesianGrid
              strokeDasharray="1 3"
              vertical={false}
              stroke="#9B9EAC"
            />
            <XAxis
              dataKey="id"
              stroke="#9B9EAC"
              tick={{ fontSize: 13, fontWeight: 500 }}
            />
            <YAxis
              dataKey="kilogram"
              domain={["dataMin -1", "dataMax + 1"]}
              allowDecimals={false}
              dx={48}
              orientation="right"
              stroke="#9B9EAC"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              domain={[0, "dataMax + 200"]}
              hide={true}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              maxBarSize={8}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              yAxisId="cal"
              maxBarSize={8}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine background="#E60000">
          {`${payload[0].value}kg`}
        </TooltipLine>
        <TooltipLine background="#E60000">
          {`${payload[1].value}Kcal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }

  return null;
}

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TooltipLine = styled.p`
  padding: 0.75rem 0.5rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${(props) => props.background};
`;
export default InfoDailyActivity;
