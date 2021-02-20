import React from 'react'
import CartItem from './CartItem'

const CartList = ({ value }) => {
    console.log(value)
    return (
        <div>
            hello from cartlist
            <CartItem />
        </div>
    )
}

export default CartList
