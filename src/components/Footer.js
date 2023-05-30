import React from 'react';
import './assets/css/style.css';

function Footer() {
    return (
        <footer className="footer text-center text-white">
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/KKitenge/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center text-dark p-3">
                © 2023 KGK
            </div>
        </footer>
    );
}

export default Footer;
