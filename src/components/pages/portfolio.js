import React from "react";
import "../assets/css/style.css";
import proj1 from '../assets/images/proj1.png';
import proj2 from '../assets/images/proj2.png';
import inc1 from '../assets/images/inc1.png';
import inc2 from '../assets/images/inc2.png';
import inc3 from '../assets/images/inc3.png';
import inc4 from '../assets/images/inc4.png';

function Portfolio() {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={proj1} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Colorful Careers</h5>
                        <p className="card-text">
                            Web application to help users find jobs in their area based on color psychology.
                        </p>
                        <button onClick={() => window.location.href = 'https://lauriefish22.github.io/Colorful-Careers/'} className="btn btn-primary">Visit Site</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={proj2} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Youniverse</h5>
                        <p className="card-text">Website for comic book fans where they can learn about new characters and their favorites.</p>
                        <button onClick={() => window.location.href = 'https://youniversee.herokuapp.com/'} className="btn btn-primary">Visit Site</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={inc1} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">La Semaine</h5>
                        <p className="card-text">
                            Planner that helps anyone schedule their day. The scheduler provides standard business hours of 9am-5pm.
                        </p>
                        <button onClick={() => window.location.href = 'https://kkitenge.github.io/la-semaine/'} className="btn btn-primary">Visit Site</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={inc2} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">iConnect</h5>
                        <p className="card-text">
                            Progressive web text editor that allows users to write without limitation. Access and no boundaries.
                        </p>
                        <button onClick={() => window.location.href = 'https://i-connect.herokuapp.com/'} className="btn btn-primary">Visit Site</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={inc3} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Tennis Facts</h5>
                        <p className="card-text">
                            Tennis Quiz - a short quiz to test a person's tennis knowledge.
                        </p>
                        <button onClick={() => window.location.href = 'https://kkitenge.github.io/tennis-facts/'} className="btn btn-primary">Visit Site</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={inc4} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Vector Newman</h5>
                        <p className="card-text">
                            Application to helps users to easily and quickl create SVG files for personal or professional use.
                        </p>
                        <button onClick={() => window.location.href = 'https://github.com/KKitenge/vector-newman'} className="btn btn-primary">Visit Repo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
