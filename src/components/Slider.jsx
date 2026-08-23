import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "../styles/Slider.css";
import bgImage from "../assets/bg-image.jpg";
import { useNavigate } from "react-router-dom";

export default function Slider() {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Swiper className="shop-slider" style={{ backgroundImage: `url(${bgImage})` }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center slider-content">
                            <div className="col-lg-6 slider-text">
                                <span className="slider-subtitle">For Men's </span>
                                <h1>High Quality Converse</h1>
                                <h3>for only <strong>$59.00</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="btn shop-btn">Shop Now</button>
                            </div>
                            <div className="col-lg-6 text-center slider-image">
                                <img src="/src/assets/converse.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center slider-content">
                            <div className="col-lg-6 slider-text">
                                <span className="slider-subtitle">For Women's</span>
                                <h1> High Quality Bag</h1>
                                <h3>for only <strong>$37.00</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>

                                <button className="shop-btn" onClick={()=> navigate("/shop")}>Shop Now</button>
                            </div>
                            <div className="col-lg-6 text-center slider-image">
                                <img src="/src/assets/bag.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}