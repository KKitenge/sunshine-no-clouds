// import React from "react";
// import "../assets/css/style.css";

// function Contact() {
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const firstName = formData.get('first-name');
//         const lastName = formData.get('last-name');
//         const email = formData.get('email');
//         const message = formData.get('message');

//         setSubmitted(true);

//     return (
//         <form id="contact-form" action="#" method="post">
//             <div className="mb-3">
//                 <label htmlFor="first-name" className="form-label">
//                     First Name
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="first-name"
//                     name="first-name"
//                     required
//                 />
//                 <div className="invalid-feedback">Please enter your first name.</div>
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="last-name" className="form-label">
//                     Last Name
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="last-name"
//                     name="last-name"
//                     required
//                 />
//                 <div className="invalid-feedback">Please enter your last name.</div>
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                     Email Address
//                 </label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     required
//                 />
//                 <div className="invalid-feedback">
//                     Please enter a valid email address.
//                 </div>
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="message" className="form-label">
//                     Message
//                 </label>
//                 <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     rows="4"
//                     required
//                 ></textarea>
//                 <div className="invalid-feedback">Please enter a message.</div>
//             </div>

//             <button type="submit" className="btn btn-primary">
//                 Submit
//             </button>
//             {submitted && <div className="confirmation-message">Thank you for your submission!</div>}
//         </form>
//     );
// }

// export default Contact;


import React, { useState } from "react";
import "../assets/css/style.css";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const email = formData.get('email');
        const message = formData.get('message');

        setSubmitted(true);
    };

    return (
        <form id="contact-form" action="/submit-form" method="post">
            <div className="mb-3">
                <label htmlFor="first-name" className="form-label">
                    First Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    name="first-name"
                    required
                />
                <div className="invalid-feedback">Please enter your first name.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="last-name" className="form-label">
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    name="last-name"
                    required
                />
                <div className="invalid-feedback">Please enter your last name.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                />
                <div className="invalid-feedback">
                    Please enter a valid email address.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    required
                ></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            {submitted && <div className="confirmation-message">Thank you for your submission!</div>}
        </form>
    );
}

export default Contact;
