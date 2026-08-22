import React from "react";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Section from "../../components/Section";
import Shop from "../shop/Shop";


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
        </React.Fragment>
    );
}