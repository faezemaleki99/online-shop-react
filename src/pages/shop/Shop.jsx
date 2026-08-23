import React from "react";
import { PRODUCTS } from "../../data/products";
import ProductBox from "./ProductBox";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Shop() {
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
            <div className="container mb-5">
                <div className="mb-5">
                    <h3 className="text-center mb-0 fw-normal">Top Collections</h3>
                </div>
                <div className="row">
                    {PRODUCTS.map((product) => (
                        <ProductBox data={product} key={product.id}></ProductBox>
                    ))}
                </div>
            </div>
            <Footer style={{ marginTop: '10px' }}></Footer>
        </React.Fragment>
    )
}