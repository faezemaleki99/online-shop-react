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
                <a className="navbar-brand" href="#">Online Shop</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <i className="fa-solid fa-cart-shopping position-relative">
                                {itemsCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '9px'}}>
                                    {itemsCount}
                                    <span className="visually-hidden"></span>
                                </span>}
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}