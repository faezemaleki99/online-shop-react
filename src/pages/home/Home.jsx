import React from "react";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Section from "../../components/Section";


export default function Home() {
    return (
        <React.Fragment>
            <div>
                <Slider></Slider>
            </div>
            <div style={{ marginTop: '10rem' }}>
                <Categories></Categories>
            </div>
            <div>
                <Section></Section>
            </div>
        </React.Fragment>
    );
}