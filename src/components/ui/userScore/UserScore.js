import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./UserScore.scss";

/**
 * Updates responsiveness based on screen width
 * @param {string} value1 - Value choosen if the width of the screen is up to 1340
 * @param {string} value2 - Value choosen if the width of the screen is down to 1340
 * @returns
 */
const responsiveString = (value1, value2) =>
  window.innerWidth > 1340 ? value1 : value2;

const Text = styled.div`
  border-radius: 100px;
  position: absolute;
  display: block;
  left: ${responsiveString("40%", "35%")};
  top: ${responsiveString("32%", "33%")};
  z-index: 1;
  color: #74798c;
  line-height: 1.5rem;
  text-align: center;
`;

const Score = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: black;
  margin: 0;
`;

const UserScore = (props) => {
  const todayScore = props.data;
  const score = [{ value: todayScore * 100, fill: "#FF0000" }];

  return (
    <div className="score-box">
      <div className="score-title">
        <p>Score</p>
      </div>
      <Text>
        <Score>
          {todayScore * 100}%<br />
        </Score>
        de votre
        <br /> objectif
      </Text>

      <ResponsiveContainer width="99%" height="99%">
        <RadialBarChart
          data={score}
          innerRadius={70}
          outerRadius={70}
          barSize={12}
          background={{ fill: "white" }}
          startAngle={90}
          deprecated
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={10}
            background
            // background={{ fill: "#fbfbfb" }}
            clockwise
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserScore;

UserScore.propTypes = {
  data: PropTypes.number,
};
