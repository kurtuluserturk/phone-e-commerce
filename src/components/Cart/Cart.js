import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import { useGlobalContext } from '../../context'

const Cart = () => {
    const { cart, children } = useGlobalContext()

    if (cart.length > 0) {
        return (
            <>
                <Title name="your" title="cart" />
                <CartColumns value={children} />
                <CartList />
            </>
        )
    } else {
        return (
            <EmptyCart />
        )
    }


}

export default Cart
