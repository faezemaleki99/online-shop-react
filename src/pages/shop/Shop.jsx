import React from "react";
import { PRODUCTS } from "../../data/products";
import ProductBox from "./ProductBox";

export default function Shop() {
    return (
        <React.Fragment>
            <div className="container">
                <h1 className="d-flex justify-content-center">Shop</h1>
            <div className="row">
                {PRODUCTS.map((product) => (
                    <ProductBox  data = {product} key = {product.id}></ProductBox>
                ))}
            </div>
            </div>
        </React.Fragment>

    )
}