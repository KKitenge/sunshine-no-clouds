import React from "react";
import '../assets/css/style.css';

function Contact() {
  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">First name</label>
        <input type="text" className="form-control" id="validationDefault01" defaultValue="" required />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Last name</label>
        <input type="text" className="form-control" id="validationDefault02" defaultValue="" required />
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  );
}

export default Contact;
