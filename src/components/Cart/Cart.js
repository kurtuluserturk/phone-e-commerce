import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { useGlobalContext } from '../../context'

const Cart = () => {
    const { cart, ...value } = useGlobalContext()

    if (cart.length > 0) {
        return (
            <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />  {/* We get value from context.js */}
                <CartTotals value={value} />
            </>
        )
    } else {
        return (
            <EmptyCart />
        )
    }


}

export default Cart
