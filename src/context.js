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
        console.log(product)
        console.log(cart)   // ilk add to cart işleminde consola ürünü vermiyor.
    }

    // Check these codes
    const getProduct = () => {  // to copy the properties of each object in storeProducts array
        let tempProducts = []
        storeProducts.map(product => {
            const singleProductProperties = { ...product }    // to copy the properties of one product
            tempProducts = [...tempProducts, singleProductProperties]    // we get previous properties of tempProducts then add singleProduct
        })
        return { products: tempProducts }
    }

    useEffect(() => {   // we can think this like componentDidMount()
        getProduct()
        // console.log('get product runned')
    }, [getProduct])

    const openModal = (id) => {
        const product = getItem(id)
        setModalProduct(product)
        setIsModalOpen(true)
        console.log('openModal')
    }

    const closeModal = () => {
        setIsModalOpen(false)
        console.log('closeModal')
    }

    const increaseItem = (id) => {
        console.log('incresae')
    }
    const decreaseItem = (id) => {
        console.log('decresae')
    }
    const removeItem = (id) => {
        console.log('removed')
    }
    const clearCart = () => {
        console.log('cleared')
    }

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
                clearCart
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
