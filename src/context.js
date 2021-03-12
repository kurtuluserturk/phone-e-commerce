import React, { useContext, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(storeProducts);
    const [productDetail, setProductDetail] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);

    const getItem = (id) => {
        const product = products.find((item) => item.id === id);
        return product;
    };

    const handleProductDetail = (id) => {
        const product = getItem(id);
        setProductDetail(product);
    };
    const addToCart = (id) => {
        const newItem = { id, count: 1 };
        setCart((prevCart) => [...prevCart, newItem]);
    };

    const openModal = (id) => {
        const product = getItem(id);
        setModalProduct(product);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const increaseItem = (id) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
                //return item.id===id ? { ..item,count:item.count+1 } : item
            })
        );
    };
    const decreaseItem = (id) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    if (item.count === 1) {
                        removeFromCart(id);
                    }
                    return { ...item, count: item.count - 1 };
                }
                return item;
            })
        );
    };
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const subTotal = cart.reduce((acc, curr) => {
        acc += curr.count * getItem(curr.id).price;
        return acc;
    }, 0);

    const tax = parseFloat((subTotal * 0.08).toFixed(2));
    const total = subTotal + tax;

    const cartTotals = { subTotal, tax, total };

    return (
        <ProductContext.Provider
            value={{
                products,
                productDetail,
                handleProductDetail,
                cart,
                cartTotals,
                getItem,
                addToCart,
                isModalOpen,
                modalProduct,
                openModal,
                closeModal,
                increaseItem,
                decreaseItem,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(ProductContext);
};

export { ProductContext, ProductProvider };
