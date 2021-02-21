import React, { useContext, useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(storeProducts)
    const [productDetail, setProductDetail] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(detailProduct)
    const [state, setState] = useState({ cartSubTotal: 0, cartTax: 0, cartTotal: 0 })


    /* // refactoring : state'leri toplama
    const [state, setState]=useState({  

    }) */

    const getItem = (id) => {
        const product = products.find(item => item.id === id)
        return product
    }

    const handleProductDetail = (id) => {
        const product = getItem(id)
        setProductDetail(product)
    }
    const addToCart = (id) => {
        let tempProducts = [...products]    // tempProducts is our array
        const index = tempProducts.indexOf(getItem(id))    // We get the index in tempProducts array using getItem(id)
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        setProducts(tempProducts)
        setCart(cart => [...cart, product])     // I think there is a problem. ???
        // console.log(cart)   // ilk add to cart işleminde consola ürünü vermiyor.
    }

    // Check these codes
    const setProduct = () => {  // to copy the properties of each object in storeProducts array
        let tempProducts = []
        storeProducts.map(product => {
            const singleProductProperties = { ...product }    // to copy the properties of one product
            tempProducts = [...tempProducts, singleProductProperties]    // we get previous properties of tempProducts then add singleProduct
        })
        return { products: tempProducts }
        //setProducts(tempProducts)
    }

    const openModal = (id) => {
        const product = getItem(id)
        setModalProduct(product)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const increaseItem = (id) => {
        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id == id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        setCart([...tempCart])
    }
    const decreaseItem = (id) => {
        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id == id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1
        if (product.count === 0) {
            removeItem(id)
        } else {
            product.total = product.count * product.price
            setCart([...tempCart])
        }

        console.log('decresae')
    }
    const removeItem = (id) => {
        let tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        setCart(cart.filter(item => item.id !== id))
        setProducts([...tempProducts])
    }

    const clearCart = () => {   // the problem is here
        setCart([])
        console.log('clear cart runned')

    }

    const addTotals = () => {
        let subTotal = 0
        cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1  // we choose 0.1 to calculate tax
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        setState({
            ...state,
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    useEffect(() => {
        addTotals()
        setProduct()
        console.log('addTotals, setProduct runned ')
    }, [cart])

    return (
        <ProductContext.Provider
            value={{
                products,
                productDetail,
                handleProductDetail,
                cart,
                addToCart,
                isModalOpen,
                modalProduct,
                openModal,
                closeModal,
                increaseItem,
                decreaseItem,
                removeItem,
                clearCart,
                ...state    // we take cartSubTotal, cartTax, cartTotal
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ProductContext)
}

export { ProductContext, ProductProvider }



