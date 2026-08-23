import React, { useContext, useEffect } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import ProductBox from "../shop/ProductBox";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Cart() {

    let { cartItems, onReset } = useContext(ShopContext);

    const selectedProducts = PRODUCTS.filter((product) =>
        cartItems.some(
            (item) => item.id === product.id && item.count > 0
        )
    );

    return (
        <React.Fragment>
            <nav aria-label="breadcrumb" className="mb-5" style={{ backgroundColor: "#f2f3f5", padding: "25px 0" }}>
                <div className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-secondary"> Home </Link>
                        </li>
                        <li className="breadcrumb-item active fw-semibold" aria-current="page"> Cart</li>
                    </ol>
                </div>
            </nav>
            <div className="container py-5 mb-5">
                <h1 className="text-center fw-semibold mb-5"> Your Cart List </h1>
                {selectedProducts.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {selectedProducts.map((product) => (
                            <ProductBox key={product.id} data={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <i className="fa-solid fa-cart-shopping text-secondary mb-4" style={{ fontSize: "60px" }} ></i>
                        <h3 className="fw-semibold mb-3"> Your Cart is Empty </h3>
                        <p className="text-secondary mb-4"> You haven't selected any products yet. </p>
                        <Link to="/shop" className="btn btn-dark px-5 py-2" > Start Shopping</Link>
                    </div>
                )}
                {selectedProducts.length > 0 && (
                    <div className="text-center mt-5">
                        <button className="btn btn-outline-danger px-4 py-2" onClick={onReset} >
                            <i className="fa-solid fa-trash me-2"></i> Clear Cart
                        </button>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}