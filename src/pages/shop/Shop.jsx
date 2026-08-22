import React from "react";
import { PRODUCTS } from "../../data/products";
import ProductBox from "./ProductBox";

export default function Shop() {
    return (
        <React.Fragment>
            <div className="container">
                 <div className="mb-5">
                    <h3 className="text-center mb-0 fw-normal">Top Collections</h3>
                </div>
            <div className="row">
                {PRODUCTS.map((product) => (
                    <ProductBox  data = {product} key = {product.id}></ProductBox>
                ))}
            </div>
            </div>
        </React.Fragment>

    )
}