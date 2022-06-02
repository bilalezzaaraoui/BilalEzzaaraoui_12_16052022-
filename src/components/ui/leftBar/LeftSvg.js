import React from "react";
import PropTypes from "prop-types";
import "./LeftSvg.scss";

/**
 * Component to display icons in the left bar.
 *
 * @component
 * @example
 * 
 * const data = {
 * image: "http://localhost:3001/static/media/energy.25fef86ed5860200bdf90f9cd185e1e3.svg" // Image of the icon
 * };

 * return (
 *   <LeftSvg image={data.image} />
 * )
 */

const LeftSvg = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="icon" />
    </div>
  );
};

export default LeftSvg;

LeftSvg.propTypes = {
  image: PropTypes.string.isRequired,
};
