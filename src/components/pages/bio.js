import React from "react";
import "../assets/css/style.css";
import cimg from "../assets/images/cimg.png";
// import Header from "../Header";

function Bio() {
  return (
    <div>
      <div className="card">
        <img src={cimg} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">ABCD-EFG-HIJ-K_LMNO-P-QRS-TUV-WX-Y-Zed.</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
