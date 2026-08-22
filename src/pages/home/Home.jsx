import React from "react";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Section from "../../components/Section";
import Shop from "../shop/Shop";
import Shopify from "../../components/Shopify";
import News from "../../components/News";
import Footer from "../../components/Footer";


export default function Home() {
    return (
        <React.Fragment>
            <div>
                <Slider></Slider>
            </div>
            <div style={{ marginTop: '8rem' }}>
                <Categories></Categories>
            </div>
            <div>
                <Section></Section>
            </div>
            <div style={{ marginTop: '8rem' }}>
                <Shop></Shop>
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