import "./LeftSvg.scss";

const LeftSvg = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="icon" />
    </div>
  );
};

export default LeftSvg;
