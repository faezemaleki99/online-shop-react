import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <React.Fragment>
            <nav aria-label="breadcrumb" style={{ backgroundColor: "#f2f3f5", padding: "25px 0" }}>
                <div className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-secondary"> Home </Link>
                        </li>
                        <li className="breadcrumb-item active fw-semibold" aria-current="page">Contact Us</li>
                    </ol>
                </div>
            </nav>
            <div className="container-fluid px-0 mb-5">
                <div style={{ height: "500px", width: "100%" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                        style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            display: "block"
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
            <div className="container py-5 mb-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <h4 className="fw-semibold mb-4"> Contact Us </h4>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" placeholder="Message" rows="6"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-dark px-4 py-2" > Submit Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-start mb-5">
                            <div className="d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    minWidth: "45px",
                                    backgroundColor: "#f2f3f5",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fa-solid fa-location-dot fs-5"></i>
                            </div>
                            <div>
                                <h5 className="fw-semibold mb-2">
                                    Our Location
                                </h5>
                                <p className="text-secondary mb-0">
                                    211 Michael Extension,
                                    <br />
                                    Lake Christopher, UD03 5WX
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-5">
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    minWidth: "45px",
                                    backgroundColor: "#f2f3f5",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fa-solid fa-mobile-screen fs-5"></i>
                            </div>
                            <div>
                                <h5 className="fw-semibold mb-2">
                                    Call Us Now
                                </h5>
                                <p className="text-secondary mb-0">
                                    (+18) 0117 022 7728
                                    <br />
                                    (+18) 0117 022 7729
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-5">
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    minWidth: "45px",
                                    backgroundColor: "#f2f3f5",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fa-solid fa-envelope fs-5"></i>
                            </div>
                            <div>
                                <h5 className="fw-semibold mb-2">
                                    Write Us Now
                                </h5>
                                <p className="text-secondary mb-0">
                                    customer.service@example.com
                                    <br />
                                    info@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}