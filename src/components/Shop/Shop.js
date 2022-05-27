import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../Fakedb/Fakedb";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProdouct/SingleProduct";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplay(data);
      });
  }, []);
  const handleClick = (product) => {
    const exists = cart.find((pro) => pro.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pro) => pro.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };
  useEffect(() => {
    if (products.length) {
      const saveCarts = getStoredCart();
      const saveCartTotal = [];
      for (const key in saveCarts) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCarts[key];
          addedProduct.quantity = quantity;
          saveCartTotal.push(addedProduct);
        }
      }
      setCart(saveCartTotal);
    }
  }, [products]);
  const handleOnSearch = (e) => {
    const search = e.target.value;
    const matchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplay(matchProducts);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <input
                className="search"
                type="text"
                placeholder="search a product"
                onChange={handleOnSearch}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="row row-cols-1 row-cols-lg-3 g-4 mt-5">
              {display?.map((product) => (
                <SingleProduct
                  key={product.key}
                  product={product}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-2">
            <Cart cart={cart}>
              <Link to="/order">
                <button className="btn btn-primary">purchase now</button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
