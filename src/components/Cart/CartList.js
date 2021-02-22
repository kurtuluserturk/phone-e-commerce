import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../../context'

const CartList = ({ value }) => {   // We get value from Cart.js as props
    const { cart } = useGlobalContext()

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />    // We send the functions as props
            })}
        </div>
    )
}

export default CartList
