import React from "react";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Section from "../../components/Section";
import Shopify from "../../components/Shopify";
import News from "../../components/News";
import Footer from "../../components/Footer";
import ProductBox from "../shop/ProductBox";
import { PRODUCTS } from "../../data/products";


export default function Home() {
    return (
        <React.Fragment>
            <div>
                <Slider></Slider>
            </div>
            <div className="mt-5">
                <Categories></Categories>
            </div>
            <div>
                <Section></Section>
            </div>
            <div className="mt-5">
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
            </div>
            <div style={{ marginTop: '8rem' }}>
                <Shopify></Shopify>
            </div>
            <div>
                <News></News>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    );
}