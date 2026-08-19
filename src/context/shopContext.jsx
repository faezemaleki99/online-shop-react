import { createContext, useEffect, useState } from "react";

export let ShopContext = createContext(null);

export default function ShopContextProvider(props) {

    let [cartItems, setCartItems] = useState(() => {
        let data = localStorage.getItem("cart-history");
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart-history', JSON.stringify(cartItems))
    }, [cartItems])

    
    function addToCart(itemId) {
        if (!cartItems.find((item) => item.id === itemId)) {
            setCartItems([...cartItems, { id: itemId, count: 1 }])
        } else {
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
            )
        }
    }

    function removeFromCart(itemId) {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId) {
                return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            }
            else return i;
        }))

    }

    function onReset() {
        setCartItems([]);
        localStorage.removeItem('cart-history');
        localStorage.clear()
    }

    let contextValue = { cartItems, addToCart, removeFromCart, setCartItems, onReset }  //datas must be shared between components

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}