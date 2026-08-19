import React, { useContext, useEffect } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import ProductBox from "../shop/ProductBox";

export default function Cart() {

    let { cartItems, onReset } = useContext(ShopContext);

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="d-flex justify-content-center mb-5"> Your Cart List: </h1>
                <div className="row justify-content-center">
                    {PRODUCTS.map((product) => {
                        if (cartItems.some((i) => i.id === product.id && i.count > 0)) {
                            return (<ProductBox key={product.id} data={product} />);
                        }
                        return null;
                    })}
                </div>
                <button className="btn btn-warning m-3" onClick={onReset}>reset</button>
            </div>
        </React.Fragment>
    )
}