import React from "react";
import "../styles/grid.scss";
import gridInfo from "../userData";
import more from "../images/icon6.png";

const GridSection = () => {
  const gridData = gridInfo.map((gridDetails) => {
    return <GridBox {...gridDetails} />;
  });
  return (
    <>
      <section className="gridsection">
        <div className="grid">{gridData}</div>
        <div className="more">
          <div className="more_inner">
            <img src={more} alt="more" />
            <p>Show More</p>
          </div>
        </div>
      </section>
    </>
  );
};

const GridBox = (props) => {
  return (
    <>
      <div className="grid_inner">
        <img src={props.icon} alt="icon" />
        <div className="details">
          <p className="link">{props.link}</p>
          <p className="post">{props.posts}</p>
        </div>
      </div>
    </>
  );
};

export default GridSection;
