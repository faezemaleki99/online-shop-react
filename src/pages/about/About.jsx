import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import productImage from "../../assets/boot2.png";
import bgImage from "../../assets/cta.png"

export default function About() {
    return (
        <React.Fragment>
            <nav aria-label="breadcrumb" className="mb-5" style={{ backgroundColor: "#f2f3f5", padding: "25px 0" }}>
                <div className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-secondary"> Home </Link>
                        </li>
                        <li className="breadcrumb-item active fw-semibold" aria-current="page"> Collection</li>
                    </ol>
                </div>
            </nav>
            <div className="container mb-5 py-4">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 text-center">
                        <img src={productImage} className="img-fluid rounded" style={{ maxHeight: "500px", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-semibold mb-4"> Welcome to Our World </h2>
                        <p className="text-secondary lh-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <div className="mb-4">
                            <h5 className="fw-semibold mb-2">
                                <i className="fa-solid fa-check me-2"></i>
                                Free Gift Card
                            </h5>
                            <p className="text-secondary mb-0 ms-4"> Gift cards are free. Claim them now!</p>
                        </div>
                        <div>
                            <h5 className="fw-semibold mb-2">
                                <i className="fa-solid fa-check me-2"></i>
                                Best Delivery
                            </h5>
                            <p className="text-secondary mb-0 ms-4"> Free Shipping On All US Orders</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="shopify-section" style={{marginBottom: '7rem', marginTop: '7rem'}}>
                <section className="section cta"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        padding: "100px 0"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="text-white mb-2">End of Season Sale </h1>
                                <p className="text-white mb-4">
                                    Take 25% off all sweaters and knits.
                                    Discount applied at checkout.
                                </p>
                                <Link to="/shop" className="btn btn-light px-4 py-2 text-uppercase fw-semibold"> Shop Now </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}