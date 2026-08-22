import React from "react";
import "../styles/Shopify.css";

export default function Shopify() {
    return (
        <React.Fragment>
            <section className="shop-features">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-truck"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>Free Shipping</h4>
                                    <p> Free shipping on orders over $70 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>Secure Payment</h4>
                                    <p>We ensure secure payment with PEV</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-headset"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>Support 24/7</h4>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-rotate-left"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>30 Days Return</h4>
                                    <p> Simply return it within 30 days for an exchange. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}