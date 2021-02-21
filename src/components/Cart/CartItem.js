import React from "react";

const CartItem = ({ item, value }) => {
  const { id, count } = item;
  const { increaseItem, decreaseItem, removeFromCart, getItem } = value; // We use props instead of useGlobalContext()

  const { title, price, img } = getItem(id);

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{ height: "5rem", width: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 my-0">
        <span className="d-lg-none">product : </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-0">
        <span className="d-lg-none">price : $</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 my-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decreaseItem(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => increaseItem(id)}>
            +
          </span>
        </div>
      </div>
      {/*  */}
      <div className="col-10 mx-auto col-lg-2 my-0">
        <div className="cart-icon" onClick={() => removeFromCart(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-0">
        <strong>item total: $ {price * count}</strong>
      </div>
    </div>
  );
};

export default CartItem;
