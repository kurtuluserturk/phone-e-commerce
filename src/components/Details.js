import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './ButtonStyle'

const Details = () => {
    const { productDetail, addToCart, openModal, cart } = useGlobalContext()
    const { id, title, img, price, company, info } = productDetail

    const inCart = cart.find((item) => item.id === id);

    return (
        <div className="container py-5">
            {/* title */}
            <div className="row">
                <div className="col-10 mx-auto my-5 text-center text-slanted text-yellow">
                    <h1>{title}</h1>
                </div>
            </div>
            {/* end title */}

            {/* product info */}
            <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                    <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                    <h2>model : {title}</h2>
                    <h4 className="text-title text-muted mt-3 mb-2">
                        made by : <span>{company}</span>
                    </h4>
                    <h4 className="text-yellow">
                        <strong>
                            price: <span>$</span>{price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        about info
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                        <Link to="/">
                            <ButtonContainer cart>back to products</ButtonContainer>
                        </Link>
                        <ButtonContainer
                            disabled={inCart ? true : false}
                            onClick={() => {
                                addToCart(id)
                                openModal(id)
                            }}
                        >
                            {inCart ? "in cart" : "add to cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
