import React from "react";
import PropTypes from "prop-types";
import "./InfoMenu.scss";

/**
 * Component to display nutritional information.
 *
 * @component
 * @example
 * 
 * const data = {
 *  color: "#fffff", // Color of the menu
 *  image: "http://localhost:3001/static/media/energy.25fef86ed5860200bdf90f9cd185e1e3.svg", // Image of  the menu
 *  energy: 240, // Amount of the menu
 *  title: "Proteines" // Title of the menu
 * };

 * return (
 *   <InfoMenu color={data.color} image={data.image} energy={data.energy} title={data.title} />
 * )
 */

const InfoMenu = (props) => {
  return (
    <div className="info-menu-box">
      <div className="icon" style={{ backgroundColor: `${props.color}` }}>
        <img src={props.image} alt="icon" />
      </div>
      <div className="layout-text">
        <div className="text">
          <h3 className="text-kcal">
            {props.energy}
            {props.title === "Calories" ? "kCal" : "g"}
          </h3>
          <p className="text-title">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;

InfoMenu.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  energy: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
