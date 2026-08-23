import bgImage from "../assets/bg-image.jpg";
import "../styles/Section.css";
import bootImage from "../assets/boot.png"
import { useNavigate } from "react-router-dom";

export default function Section() {

    const navigat = useNavigate();

    return (
        <section
            className="deal-section"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >
            <div className="container">
                <div className="row align-items-center deal-content">
                    <div className="col-lg-6 deal-text">
                        <span className="deal-subtitle"> Limited Time Offer </span>
                        <h1> Deal of the Day </h1>
                        <h3> Get it at a <strong>discounted price!</strong> </h3>
                        <p>
                            Don't miss this special offer. Shop now and
                            get your favorite products at an amazing price.
                        </p>
                        <button className="btn shop-btn" onClick={()=> navigat("/shop")}>  Shop Now </button>
                    </div>
                    <div className="col-lg-6 deal-image">
                        <img src={bootImage} className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}