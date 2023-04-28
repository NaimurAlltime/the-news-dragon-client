import React from "react";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div>
      <h4>Q-Zone</h4>
      <div>
        <img className="img-fluid" src={QZone1} alt="" />
        <img className="img-fluid" src={QZone2} alt="" />
        <img className="img-fluid" src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
