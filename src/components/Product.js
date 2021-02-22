import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { id, title, img, price } = product;
  const {
    handleProductDetail,
    addToCart,
    openModal,
    cart
  } = useGlobalContext();

  const inCart = cart.find((item) => item.id === id);

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => handleProductDetail(id)}
        >
          <Link to={`/details/${id}`} >
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
                <i className="fas fa-cart-plus" />
              )}
          </button>
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-bright font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

// PropTypes checking.
// Be careful for syntax (camelCase, PascalPase)
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

// We can add hover with 2 ways as follows:
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.4s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
    }
    .card-footer {
      background: rgba(240, 240, 240);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.6s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.6rem;
    border: none;
    background: var(--mainYellow);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 1rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--lightGreen);
    cursor: pointer;
  }
`;
