import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export default function ProductBox(props) {
    let { id, productName, productPrice, productImage } = props.data;
    let { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    let isItemExist = cartItems?.some((item) => item.id === id)

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={productImage} className="card-img-top p-3" alt={productName} style={{ height: "220px", objectFit: "contain" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title"> {productName}</h5>
                    <p className="text-muted mb-3"> Price:
                        <strong className="text-success ms-1">${productPrice}</strong>
                    </p>
                    <div className="mt-auto">
                        <button className="btn btn-primary w-100 mb-2" onClick={() => addToCart(id)}>
                            <i className="fa-solid fa-cart-plus me-2"></i>
                            Add to Cart
                        </button>
                        <div className="d-flex justify-content-center align-items-center">
                            {isItemExist && <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(id)}>-</button>}
                            <span className="mx-3 fw-bold">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
                            <button className="btn btn-outline-success btn-sm" onClick={() => addToCart(id)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}