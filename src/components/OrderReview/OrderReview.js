import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../CustomHooks/useCarts";
import useProducts from "../../CustomHooks/useProducts";
import { clearTheCart, deleteFromDb } from "../../Fakedb/Fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();
  const handleClick = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  const handlePlaceOrder = () => {
    setCart([]);
    clearTheCart();
    navigate("/inventory");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="row row-cols-1 row-cols-lg-3 g-4 mt-5">
              {cart.map((product) => (
                <Product
                  product={product}
                  key={product.key}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-2">
            <Cart cart={cart}>
              <button onClick={handlePlaceOrder} className="btn btn-primary">
                place order
              </button>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
