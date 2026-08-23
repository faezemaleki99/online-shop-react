import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import "../styles/CustomNav.css"

export default function CustomNav() {

    let { cartItems } = useContext(ShopContext);
    let itemsCount = cartItems.reduce((prev, current) => {
        return prev + current.count;
    }, 0)

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/src/assets/logo2.png" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
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
                    <Dropdown className="position-static">
                        <Dropdown.Toggle variant="dark" id="categories-dropdown" className="border-0 pt-2 bg-dark">
                            Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="mega-menu bg-dark">
                            <Container>
                                <Row>
                                    <Col md={3}>
                                        <h6 className="fw-bold mb-3">Men</h6>
                                        <Dropdown.Item as={Link} to="/categories/men/t-shirts"> T-Shirts </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/men/shirts"> Shirts</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/men/jeans"> Jeans </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/men/jackets"> Jackets</Dropdown.Item>
                                    </Col>
                                    <Col md={3}>
                                        <h6 className="fw-bold mb-3"> Women </h6>
                                        <Dropdown.Item as={Link} to="/categories/women/dresses"> Dresses </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/women/tops" > Tops</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/women/jeans"> Jeans </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/women/skirts"> Skirts</Dropdown.Item>
                                    </Col>
                                    <Col md={3}>
                                        <h6 className="fw-bold mb-3">Shoes & Bags </h6>
                                        <Dropdown.Item as={Link} to="/categories/shoes/sneakers" > Sneakers </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/shoes/boots"> Boots</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/bags/handbags" > Handbags </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/bags/backpacks"> Backpacks </Dropdown.Item>
                                    </Col>
                                    <Col md={3}>
                                        <h6 className="fw-bold mb-3"> Accessories </h6>
                                        <Dropdown.Item as={Link} to="/categories/accessories/watches"> Watches</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/accessories/sunglasses"> Sunglasses </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/accessories/belts" > Belts </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/categories/accessories/jewelry"> Jewelry </Dropdown.Item>
                                    </Col>
                                </Row>
                            </Container>
                        </Dropdown.Menu>

                    </Dropdown>
                </ul>
                <Link to="/cart" className="nav-link text-white">
                    <span className="position-relative">
                        <i className="fa-solid fa-cart-shopping fs-5" style={{ color: 'white' }}></i>
                        {itemsCount > 0 && (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                            {itemsCount} </span>
                        )}
                    </span>
                </Link>
            </div>
        </nav>
    )
}