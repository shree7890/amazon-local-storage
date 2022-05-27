import React from "react";
import "./SingleProduct.css";
const SingleProduct = (props) => {
  const { name, seller, stock, img, price, category } = props.product;
  const { handleClick } = props;
  return (
    <div className="col">
      <div className="card">
        <img className="w-50 h-50 mx-auto" src={img} alt="thumbnail" />
        <div className="card-body">
          <h5 className="card-title">name:{name}</h5>
          <p className="card-text">seller:{seller}</p>
          <p>stock:{stock}</p>
          <h5>price:{price}</h5>
          <p>category:{category}</p>
          <button
            onClick={() => handleClick(props.product)}
            className="btn btn-primary"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
