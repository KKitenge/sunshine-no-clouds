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
          <p className="card-text"></p>
          <p><p> My name is Kakazi (Cuh-Kaa-Z), and I am currently enrolled in UC Berkeley's Coding Bootcamp.</p>
            <p>I split time between the Central Valley and San Francisco Bay Area, often calling Oakland home.</p> 
            <p>In asking the question of what would come next in my personal and professional journey, coding.</p>
            <p>was a consistent if not persistent answer. I welcome the challenge and cannot wait to explore what</p>
            <p>the course offers and what I can accomplish.</p>
            <p>I am most interested in helping women in Lubumbashi, Congo create and sustain businesses. My</p>
            <p>other goal is to see that every young girl can go to school regardless of financial or health conditions.</p>
            <p>In my free time, I collect plants, and from from time to time, finish a knitting project.</p>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
