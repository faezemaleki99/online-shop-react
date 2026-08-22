import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import "../../styles/ProductBox.css";

export default function ProductBox(props) {
    let { id, productName, productPrice, productImage } = props.data;
    let { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    let isItemExist = cartItems?.some((item) => item.id === id)

    return (
        <div className="col-12 col-md-4 mb-4">

            <div className="product-card h-100">
                <div className="product-image-wrapper">
                    <img src={productImage} className="product-image" />
                </div>
                <div className="product-body">
                    <h5 className="product-title"> {productName} </h5>
                    <div className="product-price">
                        <span>Price:</span>
                        <strong> ${productPrice}</strong>
                    </div>
                    <button className="add-cart-btn" onClick={() => addToCart(id)}>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span>Add to Cart</span>
                    </button>
                    <div className="quantity-control">
                        {isItemExist && (<button className="quantity-btn decrease" onClick={() => removeFromCart(id)} > − </button>)}
                        <span className="mx-3 fw-bold">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
                        <button className="quantity-btn increase" onClick={() => addToCart(id)}  > + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}