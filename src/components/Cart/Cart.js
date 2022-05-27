import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let quantity = 0;
  let total = 0;
  for (const pro of cart) {
    if (!pro.quantity) {
      pro.quantity = 1;
    }
    quantity = quantity + pro.quantity;
    total = total + pro.quantity * pro.price;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const subtotal = shipping + total + tax;
  return (
    <div>
      <h4>Order list review</h4>
      <h2>quantity:{quantity}</h2>
      <h3>price:{total.toFixed(2)}</h3>
      <h2>shipping:{shipping.toFixed(2)}</h2>
      <h4>tax:{tax.toFixed(2)}</h4>
      <h3>subtotal:{subtotal.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cart;
