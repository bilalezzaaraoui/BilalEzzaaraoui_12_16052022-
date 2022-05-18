import "./InfoMenu.scss";

const InfoMenu = (props) => {
  return (
    <div className="info-menu-box">
      <div className="icon" style={{ backgroundColor: `${props.color}` }}>
        <img src={props.image} alt="icon" />
      </div>
      <div className="layout-text">
        <div className="text">
          <h3 className="text-kcal">{props.energy}</h3>
          <p className="text-title">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;
