import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

export default function CustomNav() {

    let { cartItems } = useContext(ShopContext);
    let itemsCount = cartItems.reduce((prev, current) => {
        return prev + current.count;
    }, 0)

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/src/assets/logo2.png" style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
                    <span>OnlineShop</span>
                </Link>
                <ul className="navbar-nav mx-auto d-flex flex-row gap-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link"> Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"> About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </li>
                </ul>
                <Link to="/cart" className="nav-link text-white">
                    <span className="position-relative">
                        <i className="fa-solid fa-cart-shopping fs-5"></i>
                        {itemsCount > 0 && (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                            {itemsCount} </span>
                        )}
                    </span>
                </Link>
            </div>
        </nav>
    )
}