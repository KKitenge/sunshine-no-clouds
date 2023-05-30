import React from "react";
import '../assets/css/style.css';

function Portfolio() {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Project 1</h5>
                        <p className="card-text">Description.</p>
                        <p className="card-text"><small className="text-muted">Project One</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

//expand with other projects