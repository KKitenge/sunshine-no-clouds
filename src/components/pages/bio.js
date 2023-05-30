import React from "react";
import "../assets/css/style.css";
import stock from "../assets/images/stock.png";
// import Header from "../Header";

function Bio() {
  return (
    <div>
      <div className="card">
        <img src={stock} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">ABCD-EFG-HIJ-K_LMNO-P-QRS-TUV-WX-Y-Zed.</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
